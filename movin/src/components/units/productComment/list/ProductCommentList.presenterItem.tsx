import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductCommentList.styles";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  DeleteTwoTone,
  EditTwoTone,
  PlusSquareTwoTone,
} from "@ant-design/icons";

import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./ProductCommentList.queries";
import ProductCommentWrite from "../write/ProductCommentWrite.container";
import ProductCommentListAnswerWrite from "./ProductCommentAnswerWrite";
import ProductCommentListAnswerUI from "./ProductCommentAnswerList";
import { FETCH_USER_LOGGED_IN } from "../../mypagePoint/Mypage.queries";

export default function ProductCommentListUIItem(props: any) {
  const router = useRouter();

  //수정하기에 담아둘 아이디
  const [isAnswer, setIsAnswer] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [isMine, setIsMine] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });

  // 댓글 받아오기
  useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.Product },
  });
  const { data: LoginData } = useQuery(FETCH_USER_LOGGED_IN);

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  // 렌더링할때
  useEffect(() => {
    if (LoginData?.fetchUserLoggedIn._id === props.el.user._id) {
      setIsMine(true);
    }
    if (
      LoginData?.fetchUserLoggedIn._id === props.el.user._id ||
      LoginData?.fetchUserLoggedIn._id ===
        props.Itemdata?.fetchUseditem.seller._id
    ) {
      setIsSeller(true);
    }
  }, [data]);

  //댓글 수정하기
  const onClickToEdit = (event) => {
    // const EditVariables = { boardId: router.query.Board };
    setisEdit(true);
  };

  //댓글 삭제
  const onClickDelete = (event) => {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: props.el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.Product },
        },
      ],
    });
    Modal.success({
      content: "댓글 삭제 완료 ",
    });
  };

  // 답글 달기
  const onClickToAnswer = async (event) => {
    setIsAnswer(true);
  };

  return (
    <>
      {!isEdit && (
        <S.Wrapper key={props.el._id}>
          <S.CommentWrapper isEdit={isEdit}>
            <S.RowBox>
              <S.Avatar src="/commons/profile.svg" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{props.el.user.name}</S.Writer>
                  <S.Contents>{props.el.contents}</S.Contents>
                </S.WriterWrapper>
              </S.MainWrapper>
              <S.OptionWrapper>
                {isMine && (
                  <EditTwoTone
                    twoToneColor="#eb2f96"
                    id={props.el._id}
                    onClick={onClickToEdit}
                    style={{
                      fontSize: "20px",
                      marginRight: "10px",
                      marginTop: "1px",
                    }}
                  />
                )}
                {isMine && (
                  <DeleteTwoTone
                    twoToneColor="#eb2f96"
                    id={props.el._id}
                    onClick={onClickDelete}
                    style={{ fontSize: "21px", marginRight: "10px" }}
                  />
                )}
                {isSeller && (
                  <PlusSquareTwoTone
                    twoToneColor="#eb2f96"
                    id={props.el._id}
                    onClick={onClickToAnswer}
                    style={{ fontSize: "21px" }}
                  />
                )}
              </S.OptionWrapper>
            </S.RowBox>
            <S.CreateTime>{getDate(props.el.createdAt)}</S.CreateTime>
            {isAnswer && (
              <ProductCommentListAnswerWrite
                el={props.el}
                setIsAnswer={setIsAnswer}
              />
            )}
            {data?.fetchUseditemQuestionAnswers.map((ee: any) => (
              <ProductCommentListAnswerUI key={ee} el={props.el} ee={ee} />
            ))}
          </S.CommentWrapper>
        </S.Wrapper>
      )}
      {isEdit && (
        <ProductCommentWrite
          isEdit={true}
          setisEdit={setisEdit}
          el={props.el}
          data={data}
        />
      )}
    </>
  );
}
