import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import * as S from "./BoardCommentList.styles";

import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
// import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentList(props: IBoardCommentListUIProps) {
  const router = useRouter();

  //수정하러가기
  const [isEdit, setisEdit] = useState(false);
  //수정하기에 담아둘 아이디
  const [EditId, setEditId] = useState("");

  //모달열기
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  //패스워드 저장할 스테이트
  const [myPassword, setMyPassword] = useState("");
  const [myPasswordID, setMyPasswordID] = useState("");

  //댓글 받아오기
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    //요청이 날아감(비어있는 상태 undefined)
    variables: { boardId: router.query.Board },
    //해당 게시글의 아이디로 댓글 목록을 불러오기
    //    ↑ gql에서 지정하는 값
  });

  // 댓글 무한스크롤
  const loadFunc = () => {
    // 데이터가 없으면 fetchMore가 실행되며 안되니까
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      //(Math.ceil : 현재까지 내가 불러온 페이지) 에 다음 열 페이지를 더해주기
      updateQuery: (prev, { fetchMoreResult }) => {
        // 추가로 받아온 데이터가 없을 때 까지 fetchMore

        // 근데 추가로 받아온 데이터가 없다면?
        if (!fetchMoreResult.fetchBoardComments)
          return {
            //원래 있던 데이터만 보여줘!
            fetchBoardComments: [...prev.fetchBoardComments],
          };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  //댓글 수정하기
  const onClickToEdit = async (event: any) => {
    // const EditVariables = { boardId: router.query.Board };
    setEditId(event.currentTarget.id);
  };

  //댓글 삭제하기
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  //모달열기 버튼 누르면
  const onClickOpenDeleteModal = (event: any) => {
    setIsOpenDeleteModal(true);
    setMyPasswordID(event.currentTarget.id);
    console.log(event.currentTarget.id);
  };

  const handleCancel = () => {
    setIsOpenDeleteModal(false);
  };

  // 패스워드 저장할 곳
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onClickDelete = async (event: any) => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myPasswordID,
        },
        //댓글 삭제됐으니까 리패치해주기
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.Board },
          },
        ],
      });
      Modal.success({
        content: "댓글 삭제가 완료되었습니다!",
      });
      setIsOpenDeleteModal(false);
      // alert("댓글 삭제가 완료되었습니다!");
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
      // alert(error.message);
    }
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={handleCancel}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      <BoardCommentListUI
        data={data}
        onClickToEdit={onClickToEdit}
        isEdit={isEdit}
        EditId={EditId}
        setisEdit={setisEdit}
        setEditId={setEditId}
        onClickOpenDeleteModal={onClickOpenDeleteModal}
        handleCancel={handleCancel}
        loadFunc={loadFunc}
      />
      {/* <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true} /> */}
    </>
  );
}
