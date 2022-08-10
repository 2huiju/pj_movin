import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../mypagePoint/Mypage.queries";
import ProductCommentListAnswerWrite from "./ProductCommentAnswerWrite";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./ProductCommentList.queries";
import * as S from "./ProductCommentList.styles";

export default function ProductCommentListAnswerUI(props: any) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });
  const { data: LoginData } = useQuery(FETCH_USER_LOGGED_IN);

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const [isEdit, setisEdit] = useState(false);
  const [isMine, setIsMine] = useState(false);

  // 렌더링할때
  useEffect(() => {
    if (LoginData?.fetchUserLoggedIn._id === props.ee.user._id) {
      setIsMine(true);
    }
  }, [data]);

  // 대댓글 삭제
  const onClickDelete = (event: any) => {
    deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: props.ee._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el._id },
        },
      ],
    });
    Modal.success({
      content: "댓글 삭제 완료 ",
    });
  };

  // 대댓글 수정하러가기
  const onClickToEdit = () => {
    setisEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <S.CommentWrapper key={props.ee._id}>
          <S.DeleteIcon src="/arrow.png" />
          <S.Avatar src="/freeboard_profile.svg" />
          <S.MainWrapper>
            <S.WriterWrapper>
              <S.Writer>{props.ee.user.name}</S.Writer>
              <S.Contents>{props.ee.contents}</S.Contents>
            </S.WriterWrapper>
          </S.MainWrapper>
          <S.OptionWrapper>
            {isMine && (
              <S.EditIcon
                src="/freeboard_pen.png"
                id={props.ee._id}
                onClick={onClickToEdit}
              />
            )}
            {isMine && (
              <S.DeleteIcon
                src="/delete.png"
                id={props.ee._id}
                // onClick={props.onClickDelete}
                onClick={onClickDelete}
              />
            )}
          </S.OptionWrapper>
        </S.CommentWrapper>
      )}
      {isEdit && (
        <ProductCommentListAnswerWrite
          isEdit={true}
          setisEdit={setisEdit}
          data={data}
          el={props.el}
          ee={props.ee}
        />
      )}
    </>
  );
}
