//수정페이지
import BoardRouting from "../../../../src/components/units/board/Routing_board/BoardRouting_container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      youtubeUrl
      images
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.Board },
  });

  return <BoardRouting isEdit={true} boardData={data} data={data} />;
}
