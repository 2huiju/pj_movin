import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IUpdateProductInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  useditemAddress?: {
    zipcode?: any;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
  tags?: string;
}

export interface IProductWriteUIProps {
  isActive: boolean;
  onClickCancel: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  setFiles: any;
  files: any;
  setFileUrls: any;
  fileUrls: any;
  handleComplete: ((address: any) => void) | undefined;
  handleCancel: any;
  handleOk: any;
  isModalVisible: boolean;
  showModal: MouseEventHandler<HTMLInputElement> | undefined;
  Ln: any;
  La: any;
  setLng: any;
  setLat: any;
  Address: string;
  setTags: Dispatch<SetStateAction<string[]>>;
  tags: string[];
  onChangeContents: any;
  fetchData: any;
  onClickUploadItem: SubmitHandler<FieldValues>;
  onClickUpdateItem: SubmitHandler<FieldValues>;
  isEdit: boolean;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
}
