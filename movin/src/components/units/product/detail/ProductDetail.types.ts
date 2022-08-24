import { MouseEventHandler } from "react";

export interface IProductDetailUIProps {
  onClickMoveToList: MouseEventHandler<HTMLDivElement> | undefined;
  Address: string;
  onClickDelete: MouseEventHandler<HTMLDivElement> | undefined;
  onClickEdit: MouseEventHandler<HTMLDivElement> | undefined;
  onClickBuying: MouseEventHandler<HTMLDivElement> | undefined;
  onClickHeart: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
  isBuying: boolean;
}
