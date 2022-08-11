import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IBoardWriteContainerProps {
  password: string;
  writer: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  address: string;
  zonecode: any;
  isEdit: boolean;
  data?: any;
  boardData?: any;
  isActive: any;
  onClickUploadBoard: any;
}

export interface IUpdateBoardInput {
  writer?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: any;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
  isEdit: boolean;
}

export interface IBoardWriteUIProps {
  editorRef: any;
  onChangeContents: any;
  onChangeAddressDetail: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickUploadBoard: any;
  onClickUpdate: any;
  handleComplete: any;
  showModal: any;
  handleOk: any;
  handleCancel: any;
  isEdit: any;
  boardData?: any;
  data?: any;
  zipcode: string;
  address: string;
  isModalVisible: any;
  fileRef: any;
  onChangeFileUrls: any;
  fileUrls: string[];
}
