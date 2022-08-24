import { useQuery } from "@apollo/client";
import { withAuth } from "../../src/commons/hooks/withAuth";
import MyPageSideBarPage from "../../src/components/commons/myPageSidebar";
import { FETCH_POINT_TRANSACTION } from "../../src/components/units/mypagePoint/MypagePoint.queries";
import MyPageProfileContainer from "../../src/components/units/mypageProfile/MyPageProfile.container";

function MyPageProfile() {
  const { data: PointData, refetch } = useQuery(FETCH_POINT_TRANSACTION);

  return (
    <div style={{ display: "flex", height: "1000px" }}>
      {/* @ts-ignore */}
      <MyPageSideBarPage PointData={PointData} refetch={refetch} />
      <MyPageProfileContainer />
    </div>
  );
}

export default withAuth(MyPageProfile);
