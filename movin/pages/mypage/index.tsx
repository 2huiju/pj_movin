import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";
import MyPageMobileContainer from "../../src/components/units/myPageMobile/MyPageMobile.container";
import MypagePoint from "../mypagePoint";

const MobileWrapper = styled.div`
  display: none;
  width: 100%;

  @media ${breakPoints.mobile} {
    display: block flex;
  }
`;

const Wrapper = styled.div`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

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

export default function MyPage() {
  const { data: PointData } = useQuery(FETCH_POINT_TRANSACTION);

  return (
    <>
      <MobileWrapper>
        <MyPageMobileContainer PointData={PointData} />
      </MobileWrapper>
      <Wrapper>
        <MypagePoint />
      </Wrapper>
    </>
  );
}
