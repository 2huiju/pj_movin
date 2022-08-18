import PhoneSidebar from "../phoneSidebar/PhoneSidebar.container";
import * as H from "./header.styles";
import { ILayoutHeaderPresenterProps } from "./header.types";

export default function LayoutHeaderPresenter(
  props: ILayoutHeaderPresenterProps
) {
  return (
    <>
      <H.Wrapper>
        <H.ImgWrapper>
          <H.Hamburger
            src="/mainPage/hamburger.png"
            onClick={props.onClickSideBar}
          />
          <H.HeaderIcon onClick={props.onClickMoveToPage("/")}>
            MOVIN
          </H.HeaderIcon>
          {props.Menu.map((el: any) => (
            <H.Button
              key={el}
              el={el}
              id={el.page}
              onClick={props.onClickMenu(el)}
              activeMenu={props.activeMenu}
            >
              {el.name}
            </H.Button>
          ))}
        </H.ImgWrapper>
        <H.ButtonWrapper>
          {props.accessToken ? (
            <>
              <H.Button3>
                {props.data?.fetchUserLoggedIn.name}님 현재 포인트
              </H.Button3>
              <H.Button4>
                {props.data?.fetchUserLoggedIn?.userPoint?.amount.toLocaleString(
                  "ko-KR"
                )}{" "}
                원
              </H.Button4>
              <H.Button2 onClick={props.onClickLogout}>로그아웃</H.Button2>
            </>
          ) : (
            <>
              <H.Button2 onClick={props.onClickMoveToPage("/signup")}>
                지금 가입
              </H.Button2>
              <H.Button2 onClick={props.onClickMoveToPage("/login")}>
                로그인
              </H.Button2>
            </>
          )}
        </H.ButtonWrapper>
      </H.Wrapper>
      <PhoneSidebar
        sideBar={props.sideBar}
        setSideBar={props.setSideBar}
        onClickMoveToPage={props.onClickMoveToPage}
      />
    </>
  );
}
