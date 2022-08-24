import { MouseEventHandler } from "react";

export interface IYouTubeVideoContainerProps {
  YoutubeTitle: any;
  MovieInfo: any;
  setYoutube: any;
}

export interface IYoutubeVideoPresenterProps {
  YoutubeTitle: string;
  onClickHeart: MouseEventHandler<HTMLSpanElement> | undefined;
  onClickCancel: MouseEventHandler<HTMLDivElement> | undefined;
}
