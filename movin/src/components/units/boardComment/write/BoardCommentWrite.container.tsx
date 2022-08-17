import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { Modal } from "antd";
import {
  IBoardCommentWriteContainerProps,
  IBoardCommentWriteUIProps,
  IUpdateBoardCommentInput,
} from "./BoardCommentWrite.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  writer: yup.string().required("필수 입력 사항"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9]).{4,8}$/,
      "비밀번호는 영문+숫자의 4~8자리 문자열입니다"
    )
    .required("필수 입력 사항"),
  contents: yup.string().required("필수 입력 사항"),
});

export default function BoardCommentWriteContainer(
  props: IBoardCommentWriteUIProps
) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [rating, setRating] = useState(0);
  const [conLength, setConLength] = useState(0);

  //댓글 패치해서 받아오기
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.Board },
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContentsLength = (event: IBoardCommentWriteContainerProps) => {
    setConLength(event.target.value);
  };

  //댓글작성하기
  const onClickUploadComment = async (
    data: IBoardCommentWriteContainerProps
  ) => {
    if (!rating) {
      Modal.warning({ content: "하트룰 눌러주세요!" });
      return;
    }
    if (data.writer && data.password && data.contents) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: data.writer,
              password: data.password,
              contents: data.contents,
              rating: Number(rating),
            },
            boardId: router.query.Board,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.Board },
            },
          ],
        });
        reset();
        setConLength(0);
        Modal.success({
          content: "댓글 작성이 완료되었습니다!",
        });
      } catch (error: any) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  //댓글 수정하기
  const onClickUpdate = async (data: IBoardCommentWriteContainerProps) => {
    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (data.contents) updateBoardCommentInput.contents = data.contents;
    if (rating) updateBoardCommentInput.rating = rating;

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setEditId("");
      Modal.success({
        content: "댓글이 수정되었습니다!",
      });
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <BoardCommentWriteUI
      onClickUploadComment={onClickUploadComment}
      onClickUpdate={onClickUpdate}
      rating={rating}
      setRating={setRating}
      data={data}
      isEdit={props.isEdit}
      el={props.el}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContentsLength={onChangeContentsLength}
      conLength={conLength}
      setEditId={undefined}
    />
  );
}
