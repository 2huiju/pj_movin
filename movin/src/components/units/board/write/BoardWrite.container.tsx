import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import BoardRoutingUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import {
  IBoardWriteContainerProps,
  IUpdateBoardInput,
} from "./BoardWrite.types";
import { Modal } from "antd";
import * as yup from "yup";
import { Editor } from "@toast-ui/react-editor";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  writer: yup.string(),
  password: yup
    .string()
    .required("필수 입력 사항")
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리 문자열입니다"
    ),
  title: yup.string(),
  contents: yup.string(),
  youtubeUrl: yup.string(),
});

export default function BoardWriteContainer(props: IBoardWriteContainerProps) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  // toastUI
  const editorRef = useRef<Editor>(null);

  const onChangeContents = (value: string) => {
    const htmlData = editorRef.current?.getInstance()?.getHTML();
    setValue("contents", htmlData);
    trigger("contents");
  };

  // toastUI edit
  useEffect(() => {
    const htmlString = props.boardData?.fetchBoard.contents;
    editorRef.current?.getInstance().setHTML(htmlString);
  }, [props?.boardData]);

  // 주소 삽입하기
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: IBoardWriteContainerProps) => {
    console.log(data.address); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(data);
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalVisible(false);
  };

  const onChangeAddressDetail = (event: any) => {
    setAddressDetail(event.target.value);
  };

  // 사진 올리기
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  //게시물 등록하기
  const onClickUploadBoard = async (data: IBoardWriteContainerProps) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: String(data.title),
            contents: String(data.contents),
            youtubeUrl: data.youtubeUrl,
            images: fileUrls,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      reset();
      console.log(result);
      router.push("/boards/" + result.data.createBoard._id);
      Modal.success({
        content: "게시물이 등록되었습니다!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //게시물 수정하기
  const onClickUpdate = async (data: IBoardWriteContainerProps) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};
    if (data.contents) updateBoardInput.contents = data.contents;
    if (data.title) updateBoardInput.title = data.title;
    if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (isChangedFiles) updateBoardInput.images = fileUrls;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: data.password,
          boardId: router.query.Board,
        },
      });
      Modal.success({
        content: "게시물이 수정되었습니다!",
      });
      router.push("/boards/" + result.data.updateBoard._id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <>
      <BoardRoutingUI
        onClickUploadBoard={onClickUploadBoard}
        onChangeContents={onChangeContents}
        editorRef={editorRef}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickUpdate={onClickUpdate}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        handleComplete={handleComplete}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onChangeFileUrls={onChangeFileUrls}
        isEdit={props.isEdit}
        boardData={props.boardData}
        data={props.data}
        isModalVisible={isModalVisible}
        zipcode={zipcode}
        address={address}
        fileUrls={fileUrls}
        fileRef={undefined}
      />
    </>
  );
}
