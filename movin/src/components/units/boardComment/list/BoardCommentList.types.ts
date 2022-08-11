import { MouseEventHandler } from "react";

export interface IBoardCommentListContainerProps {
  currentTarget: any;
}
export interface IBoardCommentListUIProps {
  setEditId: any;
  onClickOpenDeleteModal: MouseEventHandler<HTMLImageElement> | undefined;
  EditId: any;
  data?: any;
  onClickToEdit: (event: any) => void;
  setIsEdit: any;
  el?: any;
  isEdit: any;
  handleCancel: any;
  loadFunc: () => void;
}
