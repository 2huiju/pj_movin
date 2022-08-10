import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  // const [Basket, setBasket] = useState(false);
  const Today = getDate(new Date()).slice(0, 10);

  // 시작날짜, 끝 날짜 스테이트 두개씩 만들기

  // toISOString()

  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);
  console.log(data);

  const onClickMoveToDetail = (el) => () => {
    // router.push("/boards/"+router.query.Board))

    console.log(el);
    router.push(`/product/${el._id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);

    const temp = baskets.filter((basketsEl) => basketsEl._id === el._id);

    // 이렇게 하면 같은 애가 배열에 들어옴 ! [ {...}]

    if (temp.length === 1) {
      return;
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    newEl.date = Today;
    baskets.unshift(newEl);

    // baskets은 객체 또는 배열이기 때문에 el을 통째로 push 해주기
    localStorage.setItem("baskets", JSON.stringify(baskets));
    // localStorage.setItem("Date", Today);
  };

  const onClickMoveToWrite = () => {
    router.push("/product/new");
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
    // 리패치할때마다 키워드에 저장 한 다음 그 키워드를 빨간색으로 바꿔치기 하기
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const OnError = (event) => {
  //   event.target.src = "/movin.png";
  // };

  //   const getDebounce = _.debounce((data) => {
  //     refetch({ search: data, page: 1 });
  //     setKeyword(data);
  //     // 리패치할때마다 키워드에 저장 한 다음 그 키워드를 빨간색으로 바꿔치기 하기
  //   }, 500);

  //   const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
  //     getDebounce(event.target.value);
  //   };

  //무한스크롤
  const loadFunc = () => {
    // 데이터가 없으면 fetchMore가 실행되며 안되니까
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      //(Math.ceil : 현재까지 내가 불러온 페이지) 에 다음 열 페이지를 더해주기
      updateQuery: (prev, { fetchMoreResult }) => {
        // 추가로 받아온 데이터가 없을 때 까지 fetchMore

        // 근데 추가로 받아온 데이터가 없다면?
        if (!fetchMoreResult.fetchUseditems)
          return {
            //원래 있던 데이터만 보여줘!
            fetchUseditems: [...prev.fetchUseditems],
          };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToWrite={onClickMoveToWrite}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      loadFunc={loadFunc}
      // OnError={OnError}
    />
  );
}
