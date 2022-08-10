import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCommentListUI from "./ProductCommentList.presenter";
import {
  // CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductCommentList.queries";

export default function ProductCommentList(props) {
  const router = useRouter();

  //수정하러가기
  const [isEdit, setisEdit] = useState(false);
  // //수정하기에 담아둘 아이디
  // const [isAnswer, setIsAnswer] = useState(false);

  // 댓글 받아오기
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.Product },
  });

  const loadFunc = () => {
    // 데이터가 없으면 fetchMore가 실행되며 안되니까
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      //(Math.ceil : 현재까지 내가 불러온 페이지) 에 다음 열 페이지를 더해주기
      updateQuery: (prev, { fetchMoreResult }) => {
        // 추가로 받아온 데이터가 없을 때 까지 fetchMore

        // 근데 추가로 받아온 데이터가 없다면?
        if (!fetchMoreResult.fetchUseditemQuestions)
          return {
            //원래 있던 데이터만 보여줘!
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductCommentListUI
        Itemdata={props.Itemdata}
        data={data}
        loadFunc={loadFunc}
        isEdit={isEdit}
        setisEdit={setisEdit}
      />
    </>
  );
}
