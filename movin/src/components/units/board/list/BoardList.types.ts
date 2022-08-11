import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export interface IBoardListContainerProps {
  currentTarget: any;
}

export interface IBoardListUIProps {
  data?: any;
  index?: any;
  onClickMoveToWrite: () => void;
  BoardsBestData: any;
  onClickMoveToPage: (path: any) => () => void;
  onChangeStartDate: (date: any, dateString: any) => void;
  onChangeEndDate: (date: any, dateString: any) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: MouseEventHandler<HTMLButtonElement>;
  keyword: any;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  isMatched: boolean;
  count?: number;
}

export interface IBoardListStylesProps {
  isMatched: boolean;
}
