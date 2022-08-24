import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentWrite.queries";
import * as yup from "yup";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/ProductCommentList.queries";
import { Modal } from "antd";
import { useState } from "react";
import {
  IProductCommentWriteProps,
  IupdateUseditemQuestionInputProps,
} from "./ProductCommentWrite.types";

const schema = yup.object({
  contents: yup.string().required("필수 입력 사항"),
});

export default function ProductCommentWrite(props: IProductCommentWriteProps) {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [conLength, setConLength] = useState(0);

  //댓글 패치해서 받아오기
  useQuery(FETCH_USED_ITEM_QUESTIONS, {
    //요청이 날아감(비어있는 상태 undefined)
    variables: { useditemId: router.query.Product },
    //해당 게시글의 아이디로 댓글 목록을 불러오기
    //    ↑ gql에서 지정하는 값
  });

  const onChangeContentsLength = (event: any) => {
    setConLength(event.target.value);
  };

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 댓글 문의하기
  const onClickComment = async (data: any) => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query.Product,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.Product },
          },
        ],
      });
      console.log(result);
      Modal.success({
        content: "댓글 작성이 완료되었습니다",
      });
      reset();
      setConLength(0);
    } catch (error) {
      Modal.error({ content: "회원 정보 인증에 실패하였습니다" });
    }
  };

  // 댓글문의 수정
  const onClickUpdateComment = async (data: any) => {
    if (!data.contents) {
      Modal.warning({
        content: "수정한 내용이 없습니다",
      });
      return;
    }

    const updateUseditemQuestionInput: IupdateUseditemQuestionInputProps = {
      contents: "",
    };
    if (data.contents) updateUseditemQuestionInput.contents = data.contents;

    await updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput,
        useditemQuestionId: props.el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: router.query.Product },
        },
      ],
    });
    props.setisEdit(false);
    Modal.success({
      content: "댓글 수정이 완료되었습니다",
    });
  };

  return (
    <ProductCommentWriteUI
      onClickComment={onClickComment}
      onClickUpdateComment={onClickUpdateComment}
      onChangeContentsLength={onChangeContentsLength}
      conLength={conLength}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isEdit={props.isEdit}
      el={props.el}
      contentsError={undefined}
    />
  );
}
