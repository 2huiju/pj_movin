import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IProductListUIProps {
  keyword: any;
  data: any;
  loadFunc: (page: number) => void;
  onClickMoveToWrite: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeSearch: ChangeEventHandler<HTMLInputElement> | undefined;
  onClickMoveToDetail: any;
  BestItemData: any;
  onClickMoveToPage: any;
}

export interface IProductStylesProps {
  isMatched: any;
}
