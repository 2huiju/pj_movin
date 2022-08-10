import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: any;
  el?: any;
  index?: any;
  onClickMoveToWrite: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  count?: number;
}
