import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import BoardCommentListUI from "./BoardCommentList.presenter";
import * as S from "./BoardCommentList.styles";

import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { IBoardCommentListContainerProps } from "./BoardCommentList.types";

export default function BoardCommentList() {
  const router = useRouter();

  //수정하러가기
  const [isEdit, setIsEdit] = useState(false);
  //수정하기에 담아둘 아이디
  const [EditId, setEditId] = useState("");

  //모달열기
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  //패스워드 저장할 스테이트
  const [myPassword, setMyPassword] = useState("");
  const [myPasswordID, setMyPasswordID] = useState("");

  //댓글 받아오기
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.Board },
  });

  // 댓글 무한스크롤
  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return {
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
  const onClickToEdit = async (event: IBoardCommentListContainerProps) => {
    setEditId(event.currentTarget.id);
  };

  //댓글 삭제하기
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  //모달열기 버튼 누르면
  const onClickOpenDeleteModal = (event: IBoardCommentListContainerProps) => {
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

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myPasswordID,
        },
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
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
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
        setIsEdit={setIsEdit}
        setEditId={setEditId}
        onClickOpenDeleteModal={onClickOpenDeleteModal}
        handleCancel={handleCancel}
        loadFunc={loadFunc}
      />
    </>
  );
}
