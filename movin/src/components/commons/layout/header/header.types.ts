import { MouseEventHandler, ReactNode } from "react";

export interface ILayoutHeaderContainerProps {
  target: any;
}

export interface ILayoutHeaderPresenterProps {
  sideBar: any;
  onClickMenu: any;
  onClickLogout: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
  accessToken: any;
  name: ReactNode;
  activeMenu: any;
  page: string | undefined;
  Menu: any;
  onClickSideBar: MouseEventHandler<HTMLImageElement> | undefined;
  onClickMoveToPage: any;
}

export interface ILayoutHeaderStylesProps {
  activeMenu: any;
  el: any;
}
