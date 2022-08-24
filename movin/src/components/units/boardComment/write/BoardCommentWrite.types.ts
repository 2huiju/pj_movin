import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IBoardCommentWriteContainerProps {
  writer: string;
  password: string;
  contents: string;
  target: any;
}

export interface IBoardCommentWriteUIProps {
  setEditId: any;
  conLength: any;
  onChangeContentsLength: any;
  rating: any;
  setRating: ((value: number) => void) | undefined;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickUpdate: any;
  onClickUploadComment: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  el: any;
  isEdit: boolean;
  data: any;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
