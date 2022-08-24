import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneSidebarPresenter from "./PhoneSidebar.presenter";
import { IPhoneSidebarContainerProps } from "./PhoneSidebar.types";

export default function PhoneSidebarContainer(
  props: IPhoneSidebarContainerProps
) {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");

  const Menu = [
    { name: "홈", page: "/" },
    { name: "마이페이지", page: "/mypage" },
    { name: "자유게시판", page: "/boards" },
    { name: "글쓰러가기", page: "/boards/new" },
    { name: "무빈마켓", page: "/product" },
    { name: "상품판매", page: "/product/new" },
  ];

  const onClickMenu = () => (event: any) => {
    setActiveMenu(event.target.id);
    router.push(event.target.id);
    props.setSideBar(false);
  };

  useEffect(() => {
    if (!router.asPath.includes(activeMenu) || activeMenu === "") {
      setActiveMenu(router.asPath);
    }
  }, [router.asPath]);

  return (
    <PhoneSidebarPresenter
      sideBar={props.sideBar}
      Menu={Menu}
      onClickMenu={onClickMenu}
      activeMenu={activeMenu}
    />
  );
}
