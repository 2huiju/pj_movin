import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardRoutedUI from "./BoardRouted_presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardRouted_queries";
import { Modal } from "antd";

export default function BoardRouted() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

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
    // 요청이 날아감(비어있는 상태 undefined)
    variables: { boardId: router.query.Board },
    // 이게 뭐냐면 얘의 폴더주소 ! 그래서 [Board] 이걸로 하는거임
    //    ↑ gql에서 지정하는 값
  });
  console.log(data);

  //게시글 삭제
  const onClickDelete = () => {
    console.log(router);

    deleteBoard({
      variables: { boardId: router.query.Board },
    });

    Modal.success({
      content: "게시물이 삭제되었습니다!",
    });
    // alert("게시물이 삭제되었습니다.");
    router.push("/boards");
  };

  // 수정 페이지로 이동
  const onClickMoveToEdit = () => {
    router.push("/boards/" + router.query.Board + "/edit");
    console.log(data);
  };

  // 게시글 목록으로 이동
  const onClickMoveTolist = () => {
    router.push("/boards");
  };

  //useMutation 과 다르게 이 data는 변경 할 수 없음
  //반드시 data 라고 작성

  //페이지 이동과는 다르게 버튼같은걸 클릭하는게 아니라
  //상세 페이지가 실행되면 자동으로 요청 날아감
  //그다음에 데이터베이스에서 데이터를 꺼내서 가지고 온 뒤에
  //data에 데이터가 들어감

  return (
    <>
      {/* <div>BoardId: {router.query._id} 입니다.</div> */}
      <BoardRoutedUI
        data={data}
        onClickDelete={onClickDelete}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickMoveTolist={onClickMoveTolist}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
      />
    </>
  );
}
//조금 기다렸더니 데이터 들어옴 !!
