import { MouseEventHandler } from "react";

export interface IPaginations01UIProps {
  activedPage: number;
  onClickNextPage: MouseEventHandler<HTMLImageElement> | undefined;
  onClickPage: MouseEventHandler<HTMLSpanElement> | undefined;
  lastPage: number;
  startPage: number;
  onClickPrevPage: MouseEventHandler<HTMLImageElement> | undefined;
}

export interface IPaginations01StylesProps {
  isActive: any;
}
