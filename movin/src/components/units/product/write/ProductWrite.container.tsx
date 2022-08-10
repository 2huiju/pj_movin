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
// import { UPLOAD_FILE } from "../../../commons/uploads/01/Uploads01.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

function ProductWrite(props: any) {
  const router = useRouter();
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  // const [uploadFile] = useMutation(UPLOAD_FILE);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const [files, setFiles] = useState([undefined, undefined, undefined]);

  const [La, setLat] = useState(37.4847);
  const [Ln, setLng] = useState(126.9027);

  const [Address, setAddress] = useState("서울 구로구 도림천로 477");

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
  // const [imagePreview, setImagePreview] = useState("");
  // const image = watch("image");

  // useEffect(() => {
  //   if (image && image.length > 0) {
  //     const file = image[0];
  //     console.log(URL.createObjectURL(file));
  //     setImagePreview(URL.createObjectURL(file));
  //   }
  // }, [image]);

  // useEffect(() => {
  //   if (props.data?.fetchBoard.images?.length) {
  //     setFileUrls([...props.data?.fetchBoard.images]);
  //   }
  // }, [props.data]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeContents = (value: string) => {
    // 얘는 event가 아니라 value로 들어온다! (ReactQuill에서 정함)

    // 1. register로 등록하지 않고, react-hook-form에 value를 강제로 넣어주기!!

    // setValue("contents", value);

    // ----------------------------------------
    // 4. 값이 입력됐다가 지워졌을 때 <p><br></p> 이런 태그들이 남게 되는데,
    // 나중에 값이 아예 없으면 에러메세지 띄워주기 위해서 삼항 연산자로 저런 태그들을 없애주기
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // 2. "내가만든state이름" , 에 value값을 넣어줘
    // ----------------------------------------
    // 3. 근데 이건 register로 등록하는게 아니라 value를 강제로 넣어주기 때문에, react-hook-form 입장에서는
    // 이게 onChange로 바뀐건지 onClick으로 바뀐건지 뭔지 모름 -> 그래서 onChange가 작동 안하게 됨
    // 그래서 hook-form에게 "이건 온체인지로 바뀐거야! 하고 알려줘야 함" -> trigger 사용해주기
    trigger("contents");
    // react-hook-form아 지금 contents 변경됐어(onChange 됐어)하고 알려주기
  };

  const onClickUploadItem = async (data: any) => {
    // try {
    //   const FileResult = await Promise.all(
    //     files.map((el) => el && uploadFile({ variables: { file: el } }))
    //   );
    //   const UrlsResult = FileResult.map((el) =>
    //     el ? el.data.uploadFile.url : ""
    //   );

    try {
      // props.onChangeFileUrls(FileResult.data.uploadFile.url, props.index);

      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
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

  // createUseditemInput: {
  //   name: data.name,
  //   remarks: data.remarks,
  //   contents: data.contents,
  //   price: data.price,
  //   // tags: [data.tags],
  //   useditemAddress: {
  //     zipcode: data.zipcode,
  //     address: data.address,
  //     addressDetail: data.addressDatail,
  //   },
  //   images: fileUrls,

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

  // 지도그리기
  useEffect(() => {
    if (Address !== "서울 구로구 도림천로 477") {
      const script = document.createElement("script");
      // 5. 이동하기 버튼 클릭시 오류 수정하기 위해서 스크립트 태그 만들어주기
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=12a523204d108e11d65325b65bc2213a&autoload=false&libraries=services";
      // 6. 스크립트의 src에 이 주소를 넣을거야
      document.head.appendChild(script);
      // 7. Head의 자식에 script를 넣을거야

      script.onload = () => {
        // 8.  window.kakao가 로드되면 그때 이 함수 실행시켜줘
        window.kakao.maps.load(function () {
          // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
          // 4. 지도 띄우는 코드 작성
          const mapContainer = document.getElementById("map");
          // container라는 상수 값에 map의 이름을 가진 id 태그를 가져와 담아주기
          const mapOption = {
            // 지도를 생성할 때 필요한 기본 옵션 (초기값 설정)
            center: new window.kakao.maps.LatLng(37.4847, 126.9027),
            level: 3, // 지도의 레벨(확대, 축소 정도)
          };
          const map = new window.kakao.maps.Map(mapContainer, mapOption);

          const geocoder = new window.kakao.maps.services.Geocoder();

          geocoder.addressSearch(`${Address}`, function (result, status) {
            // 정상적으로 검색이 완료됐으면

            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              setLat(coords.Ma);
              setLng(coords.La);

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);

              window.kakao.maps.event.addListener(
                map,
                "click",
                function (mouseEvent: any) {
                  // 클릭한 위도, 경도 정보를 가져옵니다
                  var latlng = mouseEvent.latLng;

                  // 마커 위치를 클릭한 위치로 옮깁니다
                  marker.setPosition(latlng);

                  // setLat(latlng.Ma);
                  // setLng(latlng.La);
                }
              );
            }
          });
        });
      };
    }
  }, [Address]);

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
      // files={files}
      // setFiles={setFiles}
    />
  );
}

export default withAuth(ProductWrite);
