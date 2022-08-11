//상세페이지
import styled from "@emotion/styled";
import { breakPoints } from "../../../src/commons/styles/media";
import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

const Wrapper = styled.div`
  padding-bottom: 100px;

  @media ${breakPoints.mobile} {
    padding-bottom: 50px;
  }
`;

export default function StaticRoutedPage() {
  return (
    <Wrapper>
      <BoardDetailContainer isEdit={false} />
      <BoardCommentWrite />
      <BoardCommentList />
    </Wrapper>
  );
}
