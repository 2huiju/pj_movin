import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import { getDate } from "../../../../commons/libraries/utils";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS, FETCH_USED_ITEM_BEST } from "./ProductList.queries";

export default function ProductList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const Today = getDate(new Date()).slice(0, 10);

  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: BestItemData } = useQuery(FETCH_USED_ITEM_BEST);

  const onClickMoveToDetail = (el) => () => {
    console.log(el);
    router.push(`/product/${el._id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);

    const temp = baskets.filter((basketsEl) => basketsEl._id === el._id);

    if (temp.length === 1) {
      return;
    }

    const { __typename, ...newEl } = el;
    console.log("뉴이엘은", newEl);
    newEl.date = Today;
    baskets.unshift(newEl);

    console.log("넣고나서", baskets);

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickMoveToWrite = () => {
    router.push("/product/new");
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  //무한스크롤
  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
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
      BestItemData={BestItemData}
      onClickMoveToPage={onClickMoveToPage}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToWrite={onClickMoveToWrite}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      loadFunc={loadFunc}
    />
  );
}
