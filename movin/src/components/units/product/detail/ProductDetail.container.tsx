import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../mypagePoint/MypagePoint.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_BUYING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  USED_ITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();

  const [isBuying, setIsBuying] = useState(false);

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createOfBuying] = useMutation(CREATE_BUYING);
  const [toggleUseditemPick] = useMutation(USED_ITEM_PICK);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.Product },
  });

  const { data: LoginData } = useQuery(FETCH_USER_LOGGED_IN);

  const Address = data?.fetchUseditem?.useditemAddress?.address;

  // 렌더링할때
  useEffect(() => {
    if (LoginData?.fetchUserLoggedIn._id !== data?.fetchUseditem.seller._id) {
      setIsBuying(true);
    } else setIsBuying(false);
  }, [data]);

  console.log(isBuying);

  // 상품 찜하기
  const onClickHeart = () => {
    const result = toggleUseditemPick({
      variables: { useditemId: router.query.Product },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.Product },
        },
      ],
    });
    console.log(result);
    Modal.success({ content: "상품을 찜하셨습니다." });
  };

  // 상품 목록으로 이동
  const onClickMoveToList = () => {
    router.push("/product");
  };

  // 상품 삭제
  const onClickDelete = () => {
    deleteUseditem({
      variables: { useditemId: router.query.Product },
    });
    Modal.success({ content: "상품이 삭제되었습니다." });
    router.push("/product");
  };

  // 상품 구매
  const onClickBuying = async () => {
    const result = await createOfBuying({
      variables: { useritemId: data?.fetchUseditem._id },
    });
    console.log(result);
    Modal.success({ content: "상품 구매 성공" });
  };

  // 상품 수정
  const onClickEdit = () => {
    router.push("/product/" + router.query.Product + "/edit");
  };

  return (
    <>
      <ProductDetailUI
        data={data}
        onClickMoveToList={onClickMoveToList}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onClickHeart={onClickHeart}
        isBuying={isBuying}
        onClickBuying={onClickBuying}
        Address={Address}
      />
    </>
  );
}
