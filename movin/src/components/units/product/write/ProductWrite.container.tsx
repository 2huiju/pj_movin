import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import * as yup from "yup";
import ProductWriteUI from "./ProductWrite.presenter";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { IUpdateProductInput } from "./ProductWrite.types";
import { withAuth } from "../../../../commons/hooks/withAuth";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항"),
  remarks: yup.string().required("필수 입력 사항"),
  contents: yup.string().required("필수 입력 사항"),
  price: yup.number().required("필수 입력 사항"),
  tags: yup.string(),
  zipcode: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  useditemAddress: yup.string(),
});

function ProductWrite(props: any) {
  const router = useRouter();
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  // const [uploadFile] = useMutation(UPLOAD_FILE);

  const [tags, setTags] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const [files, setFiles] = useState([undefined, undefined, undefined]);

  const [La, setLat] = useState(37.4847);
  const [Ln, setLng] = useState(126.9027);

  const [Address, setAddress] = useState("서울 구로구 도림천로 477");

  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),

      mode: "onChange",
    });

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setIsModalVisible(false);
  };

  // 사진 올리기
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickUploadItem = async (data: any) => {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags,
            useditemAddress: {
              address: Address,
              addressDetail: data.addressDatail,
            },
            // images: UrlsResult,
            images: fileUrls,
          },
        },
      });
      reset();
      console.log(result);
      alert("등록 성공");
      router.push("/product/" + result.data.createUseditem._id);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  // 상품 수정
  const onClickUpdateItem = async (data: any) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.fetchData?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !data.zipcode &&
      !data.address &&
      !data.tags &&
      !data.addressDetail &&
      !isChangedFiles
    ) {
      Modal.warning({
        content: "수정한 내용이 없습니다",
      });
      // alert("수정한 내용이 없습니다");
      return;
    }

    const updateUseditemInput: IUpdateProductInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.tags) updateUseditemInput.tags = data.tags;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    if (data.zipcode || data.address || data.addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (data.zipcode)
        updateUseditemInput.useditemAddress.zipcode = data.zipcode;
      if (data.address)
        updateUseditemInput.useditemAddress.address = data.address;
      if (data.addressDetail)
        updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;
    }

    if (data.name && data.remarks && data.contents && data.price) {
      setIsActive(true);
    }

    const result = await updateUsedItem({
      variables: {
        updateUseditemInput,
        useditemId: router.query.Product,
      },
    });
    reset();
    console.log(result);
    alert("수정 성공");
    router.push("/product/" + result.data.updateUseditem._id);
  };

  useEffect(() => {
    if (props.fetchData?.fetchUseditem.images?.length) {
      setFileUrls([...props.fetchData?.fetchUseditem.images]);
    }
  }, [props.fetchData]);

  useEffect(() => {
    if (props.fetchData?.fetchUseditem.useditemAddress) {
      setAddress(props.fetchData?.fetchUseditem.useditemAddress.address);
    }
  }, [props.fetchData]);

  useEffect(() => {
    if (props.fetchData?.fetchUseditem.tags.length) {
      setTags([...props.fetchData?.fetchUseditem.tags.map((el) => el.name)]);
    }
  }, [props.fetchData]);

  return (
    <ProductWriteUI
      onClickUploadItem={onClickUploadItem}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      // imagePreview={imagePreview}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      setFileUrls={setFileUrls}
      onChangeContents={onChangeContents}
      onClickUpdateItem={onClickUpdateItem}
      isEdit={props.isEdit}
      fetchData={props.fetchData}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleComplete={handleComplete}
      handleCancel={handleCancel}
      Address={Address}
      La={La}
      Ln={Ln}
      isActive={isActive}
      tags={tags}
      setTags={setTags}
      setLat={setLat}
      setLng={setLng}
    />
  );
}

export default withAuth(ProductWrite);
