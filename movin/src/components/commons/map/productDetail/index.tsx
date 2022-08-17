import styled from "@emotion/styled";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export const MapImg = styled.div`
  width: 100%;
  height: 500px;
`;
export default function MapPageDetail(props) {
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

        geocoder.addressSearch(props.Address, function (result, status) {
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
              }
            );
          }
        });
      });
    };
  }, [props.Address]);

  return <MapImg id="map"></MapImg>;
}
