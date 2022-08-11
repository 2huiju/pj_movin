export interface IBoardRoutingUIprops {
  isEdit: boolean;
  data?: any;
  boardData?: any;
  isActive: any;
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
  isActive: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  onChangeName: any;
  onChangePassword: any;
  onChangeTitle: any;
  onChangeContent: any;
  onChangeYoutubeUrl: any;
  onChangeAddressDetail: any;
  onClickAddressSearch: any;
  onCompleteAddressSearch: any;
  onChangeFile: any;

  onClickSubmit: any;
  onClickUpdate: any;
  onClickSignup: any;
  onClickImage: any;
  handleComplete: any;
  showModal: any;
  handleOk: any;
  handleCancel: any;
  onChangeaddressDetail: any;
  isEdit: any;
  boardData?: any;
  data?: any;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  isModalVisible: any;
  fileRef: any;
  imageUrl: any;
  imageUrls: any;
  onChangeFileUrls: any;
  fileUrls: string[];
}
