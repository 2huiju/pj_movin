import { useQuery } from "@apollo/client";
import { useState } from "react";
import useMoveToPage from "../../../commons/hooks/UseMoveToPage";
import MyPageSideBarPresenter from "./MyPageSidebar.presenter";
import { FETCH_USER_LOGGED_IN } from "./MyPageSidebar.queries";

export default function MyPageSideBarContainer() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClickPayment = () => {
    setIsModalVisible(true);
  };

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <MyPageSideBarPresenter
      data={data}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onClickPayment={onClickPayment}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
