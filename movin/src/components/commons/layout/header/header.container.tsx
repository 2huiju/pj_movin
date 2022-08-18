import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import { accessTokenState } from "../../../../commons/store";
import LayoutHeaderPresenter from "./header.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./header.queries";
import { ILayoutHeaderContainerProps } from "./header.types";

export default function LayoutHeaderContainer() {
  const [logoutUser] = useMutation(LOGOUT_USER);

  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [sideBar, setSideBar] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { onClickMoveToPage } = useMoveToPage();

  const [activeMenu, setActiveMenu] = useState("");

  const Menu = [
    { name: "마이페이지", page: "/mypage" },
    { name: "자유게시판", page: "/boards" },
    { name: "무비마켓", page: "/product" },
    { name: "글쓰러가기", page: "/boards/new" },
  ];

  const onClickMenu = () => (event: ILayoutHeaderContainerProps) => {
    setActiveMenu(event.target.id);
    router.push(event.target.id);
  };

  useEffect(() => {
    if (!router.asPath.includes(activeMenu) || activeMenu === "") {
      setActiveMenu(router.asPath);
    }
  }, [router.asPath]);

  const onClickLogout = async () => {
    await logoutUser();

    localStorage.removeItem("refreshToken");
    setAccessToken("");
    window.location.replace("/");
  };

  const onClickSideBar = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <LayoutHeaderPresenter
      onClickSideBar={onClickSideBar}
      onClickLogout={onClickLogout}
      onClickMenu={onClickMenu}
      onClickMoveToPage={onClickMoveToPage}
      Menu={Menu}
      activeMenu={activeMenu}
      accessToken={accessToken}
      data={data}
      sideBar={sideBar}
      setSideBar={setSideBar}
      name={undefined}
      page={undefined}
    />
  );
}
