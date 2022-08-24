import InfiniteScroll from "react-infinite-scroller";
import ProductCommentListUIItem from "./ProductCommentList.presenterItem";
import { IProductCommentListUIProps } from "./ProductCommentList.types";

export default function ProductCommentListUI(
  props: IProductCommentListUIProps
) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <ProductCommentListUIItem
          key={el._id}
          el={el}
          Itemdata={props.Itemdata}
        />
      ))}
    </InfiniteScroll>
  );
}
