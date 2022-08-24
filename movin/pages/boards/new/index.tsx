// 게시물작성페이지
import BoardWriteContainer from "../../../src/components/units/board/write/BoardWrite.container";

export default function StaticRoutingPage() {
  // @ts-ignore
  return <BoardWriteContainer isEdit={false} />;
}
