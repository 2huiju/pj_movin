import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/commons/hooks/withAuth";
import MyPageSideBarPage from "../../src/components/commons/myPageSidebar";
import MyPagePointContainer from "../../src/components/units/mypagePoint/Mypage.container";

const FETCH_POINT_TRANSACTION = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      balance
      status
      amount
      statusDetail
      createdAt
    }
  }
`;
function MyPage() {
  const { data: PointData } = useQuery(FETCH_POINT_TRANSACTION);

  return (
    <div style={{ display: "flex", width: "100%;" }}>
      <MyPageSideBarPage />
      <MyPagePointContainer PointData={PointData} />;
    </div>
  );
}

export default withAuth(MyPage);
