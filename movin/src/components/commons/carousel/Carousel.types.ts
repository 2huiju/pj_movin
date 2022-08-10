import { MouseEventHandler } from "react";

export interface ICarouselPresenterProps {
  onClickDetail2: MouseEventHandler<HTMLDivElement> | undefined;
  onClickDetail3: MouseEventHandler<HTMLDivElement> | undefined;
  onClickDetail1: MouseEventHandler<HTMLDivElement> | undefined;
  onClickCancelDetail: MouseEventHandler<HTMLImageElement> | undefined;
  isDetail3: boolean;
  isDetail2: boolean;
  isDetail1: boolean;
}
