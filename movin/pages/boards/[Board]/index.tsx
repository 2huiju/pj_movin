//상세페이지
import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function StaticRoutedPage() {
  return (
    <div>
      <BoardDetailContainer isEdit={false} />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  );
}
