import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import BoardDetailPresenter from "./BoardDetail.presenter";

export default function BoardDetailContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { onClickMoveToPage } = useMoveToPage();

  //좋아요 누르기
  const onClickLike = () => {
    likeBoard({
      variables: { boardId: router.query.Board },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.Board } },
      ],
    });
  };

  // 싫어요 누르기
  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: router.query.Board },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.Board } },
      ],
    });
  };

  // 게시글 받아오기
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.Board },
  });

  //게시글 삭제
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.Board },
      });
      Modal.success({
        content: "게시물이 삭제되었습니다!",
      });
      router.push("/boards");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BoardDetailPresenter
        data={data}
        onClickDelete={onClickDelete}
        onClickMoveToPage={onClickMoveToPage}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
        BoardId={router.query.Board}
      />
    </>
  );
}
