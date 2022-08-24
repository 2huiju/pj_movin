export interface IProductCommentListAnswerUIProps {
  ee: any;
  el: any;
}

export interface IProductCommentListAnswerWriteProps {
  isEdit: boolean;
  setisEdit: any;
  ee: any;
  setIsAnswer: any;
  el: any;
}

export interface IupdateUseditemQuestionAnswerInputProps {
  contents: string;
}

export interface IProductCommentListProps {
  Itemdata: any;
}

export interface IProductCommentListUIProps {
  Itemdata: any;
  loadFunc: (page: number) => void;
  data: any;
}

export interface IProductCommentListUIItemProps {
  Itemdata: any;
  el: any;
}
