import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: any;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickToEdit: (event: any) => void;
  setIsEdit: any;
  el?: any;
  loadFunc: () => void;
}
