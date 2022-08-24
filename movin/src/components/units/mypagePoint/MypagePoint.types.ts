import { MouseEventHandler } from "react";

export interface IMyPagePointContainerProps {
  PointData: any;
}

export interface IMyPagePointPresenterProps {
  SellingPoint: any;
  BuyingPoint: any;
  LoadingPoint: any;
  PointData: any;
  activeMenu: string;
  Menu: any;
  isPoint: string;
  onClickMenu(el: any): MouseEventHandler<HTMLDivElement> | undefined;
}

export interface IIMyPagePointStylesProps {
  el: any;
  activeMenu: string;
}
