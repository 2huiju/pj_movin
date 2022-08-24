import { MouseEventHandler } from "react";

export interface IMyPageSideBarPresenterProps {
  activeMenu: string;
  onClickMenu: any;
  Menu: any;
  setIsModalVisible: any;
  isModalVisible: any;
  onClickPayment: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
}

export interface IMyPageSideBarStylesProps {
  activeMenu: string;
  el: any;
}
