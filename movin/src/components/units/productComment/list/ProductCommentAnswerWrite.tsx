import * as S from "./ProductCommentList.styles";
import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ProductCommentList.queries";

const schema = yup.object({
  contents: yup.string().required("필수 입력 사항"),
});

export default function ProductCommentListAnswerWrite(props: any) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });

  //수정하기에 담아둘 아이디
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 대댓글 달기
  const onClickCommentAnswer = async (data: any) => {
    const result = await createUseditemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: data.contents,
        },
        useditemQuestionId: props.el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el._id },
        },
      ],
    });
    console.log(result);
    props.setIsAnswer(false);
    Modal.success({
      content: "문의 답변 작성 완료되었습니다",
    });
  };

  const onClickCommentAnswerEdit = async (data: any) => {
    if (!data.contents) {
      Modal.warning({
        content: "수정한 내용이 없습니다",
      });
      return;
    }

    const updateUseditemQuestionAnswerInput = {};
    if (data.contents)
      updateUseditemQuestionAnswerInput.contents = data.contents;

    const result = await updateUseditemQuestionAnswer({
      variables: {
        updateUseditemQuestionAnswerInput,
        useditemQuestionAnswerId: props.ee._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el._id },
        },
      ],
    });
    console.log(result);
    Modal.success({
      content: "문의 답변 수정이 완료되었습니다",
    });
    props.setisEdit(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(
          props.isEdit ? onClickCommentAnswerEdit : onClickCommentAnswer
        )}
      >
        <S.AnswerWrapper>
          <S.CommentWrite
            maxLength={100}
            placeholder="답변 작성하기."
            {...register("contents")}
            defaultValue={props.ee?.contents}
          ></S.CommentWrite>
          <S.CommentBoard>
            <S.CommentNumber>{props.ee?.contents.length}/100</S.CommentNumber>
            <S.CommentButton isValid={formState.isValid}>
              {props.isEdit ? "수정" : "답변"}하기
            </S.CommentButton>
          </S.CommentBoard>
        </S.AnswerWrapper>
      </form>
    </>
  );
}
