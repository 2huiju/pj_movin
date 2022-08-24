import { ChangeEventHandler, ReactNode } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProductCommentWriteProps {
  isEdit: any;
  setisEdit: any;
  el: any;
}

export interface IupdateUseditemQuestionInputProps {
  contents: string;
}

export interface IProductCommentWriteUIProps {
  contentsError: ReactNode;
  conLength: any;
  onChangeContentsLength: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  el: any;
  onClickComment: SubmitHandler<FieldValues>;
  onClickUpdateComment: SubmitHandler<FieldValues>;
  isEdit: boolean;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
}
