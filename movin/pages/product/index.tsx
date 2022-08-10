import ProductList from "../../src/components/units/product/list/ProductList.container";
import TodaySidebar from "../../src/components/commons/TodaySidebar";

export default function ProductListPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ProductList />
        <TodaySidebar />
      </div>
    </>
  );
}
