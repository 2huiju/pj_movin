import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import TodaySidebar from "../../../src/components/commons/todaySidebar/index";
import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/product/detail/ProductDetail.queries";
import ProductCommentList from "../../../src/components/units/productComment/list/ProductCommentList.container";
import ProductCommentWrite from "../../../src/components/units/productComment/write/ProductCommentWrite.container";

export default function ProductDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.Product },
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* @ts-ignore */}
        <ProductDetail isEdit={false} />
        <TodaySidebar />
      </div>
      {/* @ts-ignore */}
      <ProductCommentWrite />
      <ProductCommentList Itemdata={data} />
    </>
  );
}
