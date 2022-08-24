import { MouseEventHandler } from "react";

export interface IMyPageMobilePresenterProps {
  setIsModalVisible: any;
  isModalVisible: boolean;
  onClickMenu(el: any): MouseEventHandler<HTMLDivElement> | undefined;
  activeMenu: string;
  Menu: any;
  onClickPayment: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
}

export interface IMyPageMobileStylesProps {
  activeMenu: string;
  el: any;
}
