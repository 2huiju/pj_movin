//상세페이지
import BoardRouted from "../../../src/components/units/board/detail/BoardRouted_container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/Routing_Comment/BoardCommentRouting.container";

export default function StaticRoutedPage() {
  return (
    <div>
      <BoardRouted isEdit={false} />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  );
}
