import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MyPageMobilePresenter from "./MyPageMobile.presenter";
import { FETCH_USER_LOGGED_IN } from "./MyPageMobile.queries";

export default function MyPageMobileContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [activeMenu, setActiveMenu] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClickPayment = () => {
    setIsModalVisible(true);
  };

  const Menu = [
    { name: "내 포인트", page: "/mypagePoint" },
    { name: "내 프로필", page: "/mypageProfile" },
  ];

  const onClickMenu = () => (event: any) => {
    setActiveMenu(event.target.id);
    router.push(event.target.id);
  };

  useEffect(() => {
    if (!router.asPath.includes(activeMenu) || activeMenu === "") {
      setActiveMenu(router.asPath);
    }
  }, [router.asPath]);

  return (
    <MyPageMobilePresenter
      data={data}
      Menu={Menu}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onClickPayment={onClickPayment}
      onClickMenu={onClickMenu}
      activeMenu={activeMenu}
    />
  );
}
