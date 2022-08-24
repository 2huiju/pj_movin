import PaymentPage from "../../commons/payment";
import * as M from "./MyPageMobile.styles";
import { IMyPageMobilePresenterProps } from "./MyPageMobile.types";
export default function MyPageMobilePresenter(
  props: IMyPageMobilePresenterProps
) {
  return (
    <M.Wrapper>
      <M.Title>MYPAGE</M.Title>
      <M.ProfileImage src="/commons/profile.svg"></M.ProfileImage>
      <M.Title>{props.data?.fetchUserLoggedIn.name}</M.Title>
      <M.MyPoint>
        🐷{" "}
        {props.data?.fetchUserLoggedIn?.userPoint?.amount.toLocaleString(
          "ko-KR"
        )}
        원
      </M.MyPoint>
      <M.PayMentButton onClick={props.onClickPayment}>충전하기</M.PayMentButton>
      {props.Menu.map((el: any) => (
        <M.SubTitle
          el={el}
          activeMenu={props.activeMenu}
          id={el.page}
          key={el}
          onClick={props.onClickMenu(el)}
        >
          {el.name}
        </M.SubTitle>
      ))}
      {props.isModalVisible && (
        <PaymentPage
          data={props.data}
          setIsModalVisible={props.setIsModalVisible}
        />
      )}
    </M.Wrapper>
  );
}
