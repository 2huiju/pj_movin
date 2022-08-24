import { MouseEventHandler } from "react";

export interface IMyPageHeartMoviePresenterProps {
  heartMovie: any;
  onClickCancelHeart: (
    arg0: any
  ) => MouseEventHandler<HTMLSpanElement> | undefined;
}
