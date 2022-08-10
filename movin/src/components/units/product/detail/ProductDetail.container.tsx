import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../mypagePoint/Mypage.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_BUYING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  USED_ITEM_PICK,
} from "./ProductDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDetail() {
  const router = useRouter();

  const [isBuying, setIsBuying] = useState(false);

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createOfBuying] = useMutation(CREATE_BUYING);
  const [toggleUseditemPick] = useMutation(USED_ITEM_PICK);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.Product },
  });

  const { data: LoginData } = useQuery(FETCH_USER_LOGGED_IN);

  const Address = data?.fetchUseditem?.useditemAddress?.address;

  // console.log(data?.fetchUseditem.seller._id);
  // console.log(LoginData?.fetchUserLoggedIn._id);

  console.log(Address);

  // 렌더링할때
  useEffect(() => {
    if (LoginData?.fetchUserLoggedIn._id !== data?.fetchUseditem.seller._id) {
      setIsBuying(true);
    } else setIsBuying(false);
  }, [data]);

  console.log(isBuying);

  // 상품 찜하기
  const onClickHeart = () => {
    const result = toggleUseditemPick({
      variables: { useditemId: router.query.Product },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.Product },
        },
      ],
    });
    console.log(result);
    Modal.success({ content: "상품을 찜하셨습니다." });
  };

  // 상품 목록으로 이동
  const onClickMoveTolist = () => {
    router.push("/product");
  };

  // 상품 삭제
  const onClickDelete = () => {
    deleteUseditem({
      variables: { useditemId: router.query.Product },
    });
    Modal.success({ content: "상품이 삭제되었습니다." });
    router.push("/product");
  };

  // 상품 구매
  const onClickBuying = async () => {
    const result = await createOfBuying({
      variables: { useritemId: data?.fetchUseditem._id },
    });
    console.log(result);
    Modal.success({ content: "상품 구매 성공" });
  };

  // 상품 수정
  const onClickEdit = () => {
    router.push("/product/" + router.query.Product + "/edit");
  };

  // 지도그리기
  useEffect(() => {
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
        const mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        // container라는 상수 값에 map의 이름을 가진 id 태그를 가져와 담아주기
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션 (초기값 설정)
          center: new window.kakao.maps.LatLng(37.4847, 126.9027), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(Address, function (result, status) {
          // 정상적으로 검색이 완료됐으면

          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

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
  }, [Address]);

  return (
    <>
      <ProductDetailUI
        data={data}
        onClickMoveTolist={onClickMoveTolist}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onClickHeart={onClickHeart}
        isBuying={isBuying}
        onClickBuying={onClickBuying}
      />
    </>
  );
}
