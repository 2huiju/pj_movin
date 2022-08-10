import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import BoardRoutingUI from "./BoardRouting_presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardRouting_queries";
import { IBoardRoutingUIprops, IUpdateBoardInput } from "./BoardRouting_types";
import { Modal } from "antd";

export default function BoardRouting(props: IBoardRoutingUIprops) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [writer, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  // const [data, setData] = useState("")

  //유튜브 링크 삽입하기
  const onChangeYoutubeUrl = (event: any) => {
    setYoutubeUrl(event.target.value);
  };

  //주소 삽입하기
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    console.log(data.address); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(data);
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalVisible(false);
  };

  //상세 주소
  const onChangeaddressDetail = (event: any) => {
    setAddressDetail(event.target.value);
  };

  // 작성자 이름
  function onChangeName(event: any) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else setIsActive(false);
  }

  //비밀번호
  function onChangePassword(event: any) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (event.target.value && writer && title && contents) {
      setIsActive(true);
    } else setIsActive(false);
  }

  //제목
  function onChangeTitle(event: any) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (event.target.value && writer && password && contents) {
      setIsActive(true);
    } else setIsActive(false);
  }

  //내용
  function onChangeContent(event: any) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }

    if (event.target.value && writer && password && title) {
      setIsActive(true);
    } else setIsActive(false);
  }

  // 사진 올리기
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  //게시물 등록하기
  const onClickSignup = async (event: any) => {
    if (writer === "") {
      setNameError("이름을 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요");
    }
    if (contents === "") {
      setContentError("내용을 입력해주세요");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtubeUrl,
              images: fileUrls,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        console.log(result);

        router.push("/boards/" + result.data.createBoard._id);
        // router.push("/boards/Routed_Board/"+ result.data.createBoard._id)
        Modal.success({
          content: "게시물이 등록되었습니다!",
        });
        // alert("게시물이 등록되었습니다!");
      } catch (error) {
        console.log(error);
        // alert(error.message);
      }
    }
    // setData(result.data.createBoardInput.message)
  };

  //게시물 수정하기
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
    ) {
      Modal.warning({
        content: "수정한 내용이 없습니다",
      });
      // alert("수정한 내용이 없습니다");
      return;
      //return : 함수의 종료
    }

    if (!password) {
      Modal.error({
        content: "비밀번호를 입력해주세요",
      });
      // alert("비밀번호를 입력해주세요");
      return;
      //함수를 종료시켜서 밑의 함수 실행 안되게 하기
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (writer) updateBoardInput.writer = writer;
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
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
          password: password,
          boardId: router.query.Board,
        },
      });
      Modal.success({
        content: "게시물이 수정되었습니다!",
      });
      router.push("/boards/" + result.data.updateBoard._id);
      // router.push(`/08-05-boards/${router.query.number}`) 이것도 가능
      console.log(result);
      // alert("게시물이 수정되었습니다!");
    } catch (error) {
      console.log(error);

      // alert(error.message);
    }

    // setData(result.data.createBoardInput.message)
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <>
      <BoardRoutingUI
        onClickSignup={onClickSignup}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onClickUpdate={onClickUpdate}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        handleComplete={handleComplete}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onChangeaddressDetail={onChangeaddressDetail}
        onChangeFileUrls={onChangeFileUrls}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentError={contentError}
        isActive={isActive}
        isEdit={props.isEdit}
        boardData={props.boardData}
        data={props.data}
        isModalVisible={isModalVisible}
        zipcode={zipcode}
        address={address}
        fileUrls={fileUrls}
      />
      {/* <Modal width="1000px" /> */}
    </>
  );
}
