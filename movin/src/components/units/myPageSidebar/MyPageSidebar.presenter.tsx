import PaymentPage from "../../commons/payment";
import * as M from "./MyPageSidebar.styles";
import { IMyPageSideBarPresenterProps } from "./MyPageSidebar.types";
export default function MyPageSideBarPresenter(
  props: IMyPageSideBarPresenterProps
) {
  return (
    <M.Wrapper>
      <M.Title>MYPAGE</M.Title>
      <M.ProfileImage src="/freeboard_profile.svg"></M.ProfileImage>
      <M.Title>{props.data?.fetchUserLoggedIn.name}</M.Title>
      <M.MyPoint>
        🐷{" "}
        {props.data?.fetchUserLoggedIn?.userPoint?.amount.toLocaleString(
          "ko-KR"
        )}
        원
      </M.MyPoint>
      <M.PayMentButton onClick={props.onClickPayment}>충전하기</M.PayMentButton>
      <M.SubTitle onClick={props.onClickMoveToPage("/mypage")}>
        내 포인트
      </M.SubTitle>
      <M.SubTitle onClick={props.onClickMoveToPage("/mypageProfile")}>
        내 프로필
      </M.SubTitle>
      {props.isModalVisible && (
        <PaymentPage
          data={props.data}
          setIsModalVisible={props.setIsModalVisible}
        />
      )}
    </M.Wrapper>
  );
}
