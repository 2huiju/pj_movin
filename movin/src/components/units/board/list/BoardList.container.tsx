import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_BEST,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import _ from "lodash";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import BoardListPresenter from "./BoardList.presenter";
import { IBoardListContainerProps } from "./BoardList.types";

export default function BoardListContainer() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: BoardsCountData, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);
  const { data: BoardsBestData } = useQuery(FETCH_BOARDS_OF_BEST);
  const { onClickMoveToPage } = useMoveToPage();

  const [startDate, setStartDate] = useState(
    new Date(1900, 2, 1).toISOString()
  );
  const [endDate, setEndDate] = useState(new Date().toISOString());

  const onClickMoveToWrite = () => {
    router.push("/boards/new");
  };

  const onClickMoveToDetail = (event: IBoardListContainerProps) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1, endDate, startDate });
    refetchBoardsCount({ search: data, page: 1, endDate, startDate });
    setKeyword(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickSearch = () => {
    getDebounce(keyword);
  };

  const onChangeStartDate = (
    date: IBoardListContainerProps,
    dateString: IBoardListContainerProps
  ) => {
    if (date === null) {
      const setDate = new Date(1900, 2, 1);
      setStartDate(setDate.toISOString());
    } else {
      const setDate = new Date(dateString + "T00:00:00");
      setStartDate(setDate.toISOString());
    }
  };

  const onChangeEndDate = (
    date: IBoardListContainerProps,
    dateString: IBoardListContainerProps
  ) => {
    if (date === null) {
      const setDate = new Date(3000, 2, 1);
      setEndDate(setDate.toISOString());
    } else {
      const setDate = new Date(dateString + "T00:00:00");
      setEndDate(setDate.toISOString());
    }
  };

  return (
    <>
      <BoardListPresenter
        data={data}
        onClickMoveToWrite={onClickMoveToWrite}
        onClickMoveToDetail={onClickMoveToDetail}
        onClickMoveToPage={onClickMoveToPage}
        onChangeStartDate={onChangeStartDate}
        onClickSearch={onClickSearch}
        onChangeEndDate={onChangeEndDate}
        keyword={keyword}
        onChangeSearch={onChangeSearch}
        refetch={refetch}
        count={BoardsCountData?.fetchBoardsCount}
        BoardsBestData={BoardsBestData}
        isMatched={false}
      />
    </>
  );
}
