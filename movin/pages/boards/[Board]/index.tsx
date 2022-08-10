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

// // 전환시킬 게시

// import {useQuery, gql} from '@apollo/client'
// import { useRouter } from 'next/router'
// //4번 게시물을 불러오기 위해서 useQuery() 사용

// import * as S from '../../../../styles/boards_new2'

// // import img1 from "/freeboard_image.png"

// const FETCH_BOARD = gql`
//     query fetchBoard($boardId:ID!) {
//         fetchBoard(boardId:$boardId) {
//             _id
//             writer
//             title
//             contents
//             likeCount
//             dislikeCount
//             youtubeUrl
//             images
//             createdAt
//     }
// }
// `

// export default function StaticRoutedPage() {

//     const router = useRouter()
//     console.log(router)

//     const { data } = useQuery(FETCH_BOARD, { //요청이 날아감(비어있는 상태 undefined)
//         variables: { boardId: router.query.Board }
//                    //이게 뭐냐면 얘의 폴더주소 ! 그래서 [Board] 이걸로 하는거임
//               //    ↑ gql에서 지정하는 값
//     })
//     //useMutation 과 다르게 이 data는 변경 할 수 없음
//     //반드시 data 라고 작성

//     //페이지 이동과는 다르게 버튼같은걸 클릭하는게 아니라
//     //상세 페이지가 실행되면 자동으로 요청 날아감
//     //그다음에 데이터베이스에서 데이터를 꺼내서 가지고 온 뒤에
//     //data에 데이터가 들어감

//     console.log(data)
//     //data가 잘 들어가있는지 확인해보기

//     return (
//     <>{/* <div>BoardId: {router.query._id} 입니다.</div> */}
//         <S.Wrapper>
//             <S.HeadWrapper>
//                 <S.ProfileIcon src="/freeboard_profile.svg"/>
//                 <S.NameWrapper>
//                     <S.Writer>{data? data.fetchBoard.writer : "loading..." }</S.Writer>
//                     <S.CreateAt>Date : {data? data.fetchBoard.createdAt : "loading..." }</S.CreateAt>
//                 </S.NameWrapper>
//                 <S.FileIcon src="/freeboard_file.svg"/>
//                 <S.MapIcon src="/freeboard_map.svg"/>
//             </S.HeadWrapper>
//             <S.Hr></S.Hr>
//             <S.MainWrapper>
//                 <S.Title>{data? data.fetchBoard.title : "loading..." }</S.Title>
//                 <S.Image src="/freeboard_picture.svg"/>
//                 <S.Content>{data? data.fetchBoard.contents : "loading..." }</S.Content>
//             </S.MainWrapper>
//             <S.YouTubeWrapper>
//                 <S.Youtube src="/freeboard_youtube.svg"/>
//             </S.YouTubeWrapper>
//             <S.FooterWrapper>
//                 <S.Like>
//                     <S.LikeIcon src="/freeboard_likeicon.svg"/>
//                     <S.LikeCount>{data? data.fetchBoard.likeCount : "loading..." }</S.LikeCount>
//                 </S.Like>
//                 <S.DisLike>
//                     <S.DislikeIcon src="/freeboard_dislikeicon.svg"/>
//                     <S.DislikeCount>{data? data.fetchBoard.dislikeCount : "loading..." }</S.DislikeCount>
//                 </S.DisLike>
//             </S.FooterWrapper>
//         </S.Wrapper>
//     </>
//     )
// //조금 기다렸더니 데이터 들어옴 !!
// }
