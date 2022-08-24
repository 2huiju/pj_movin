import { MouseEventHandler } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginPagePresenterProps {
  onClickToSignup: MouseEventHandler<HTMLDivElement> | undefined;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickLogin: SubmitHandler<FieldValues>;
}
