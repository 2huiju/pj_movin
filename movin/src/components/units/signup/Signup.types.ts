import { MouseEventHandler } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignupPagePresenterProps {
  onClickToLogin: MouseEventHandler<HTMLDivElement> | undefined;
  onClickToCancel: MouseEventHandler<HTMLButtonElement> | undefined;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickSignup: SubmitHandler<FieldValues>;
}
