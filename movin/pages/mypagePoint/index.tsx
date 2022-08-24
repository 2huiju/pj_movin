import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { withAuth } from "../../src/commons/hooks/withAuth";
import MyPageSideBarPage from "../../src/components/commons/myPageSidebar";
import MyPagePointContainer from "../../src/components/units/mypagePoint/MypagePoint.container";

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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1000px;
`;

function MyPagePoint() {
  const { data: PointData } = useQuery(FETCH_POINT_TRANSACTION);

  return (
    <>
      <Wrapper>
        <MyPageSideBarPage />
        <MyPagePointContainer PointData={PointData} />
      </Wrapper>
    </>
  );
}

export default withAuth(MyPagePoint);
