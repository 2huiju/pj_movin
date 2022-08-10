import { MouseEventHandler } from "react";

export interface IMyPageSideBarPresenterProps {
  setIsModalVisible: any;
  isModalVisible: any;
  onClickMoveToPage: any;
  onClickPayment: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
}
