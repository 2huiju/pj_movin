import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/product/detail/ProductDetail.queries";
import ProductCommentList from "../../../src/components/units/productComment/list/ProductCommentList.container";
import ProductCommentWrite from "../../../src/components/units/productComment/write/ProductCommentWrite.container";
// @ts-ignore
import TodaySidebarPage from "../../../src/components/commons/todaySidebar";

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
        <TodaySidebarPage />
      </div>
      {/* @ts-ignore */}
      <ProductCommentWrite />
      <ProductCommentList Itemdata={data} />
    </>
  );
}
