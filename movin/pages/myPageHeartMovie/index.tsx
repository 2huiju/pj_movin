import styled from "@emotion/styled";
import MyPageSideBarPage from "../../src/components/commons/myPageSidebar";
import MyPageHeartMovieContainer from "../../src/components/units/myPageHeartMovie/MyPageHeartMovie.Container";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function MyPageHeartMoviePage() {
  return (
    <>
      <Wrapper>
        <MyPageSideBarPage />
        <MyPageHeartMovieContainer />
      </Wrapper>
    </>
  );
}
