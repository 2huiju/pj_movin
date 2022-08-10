import * as S from "./BoardRouted_styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardRoutedUIProps } from "./BoardRouted_types";

export default function BoardRoutedUI(props: IBoardRoutedUIProps) {
  return (
    <>
      {/* <div>BoardId: {router.query._id} 입니다.</div> */}
      <S.Wrapper>
        <S.BoardWrapper>
          <S.HeadWrapper>
            <S.ProfileIcon src="/freeboard_profile.svg" />
            <S.NameWrapper>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreateAt>
                Date : {getDate(props.data?.fetchBoard.createdAt)}
              </S.CreateAt>
              <S.CreateAt>
                {props.data?.fetchBoard.boardAddress?.address}
              </S.CreateAt>
            </S.NameWrapper>
            <S.FileIcon src="/freeboard_file.svg" />
            <S.MapIcon src="/freeboard_map.svg" />
          </S.HeadWrapper>
          <S.Hr></S.Hr>
          <S.MainWrapper>
            <S.Title>{props.data?.fetchBoard.title}</S.Title>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
            {/* <S.Image>{props.data?.fetchBoard.images}</S.Image> */}
            <S.Content>{props.data?.fetchBoard.contents}</S.Content>
          </S.MainWrapper>
          <S.YouTubeWrapper>
            {props.data?.fetchBoard.youtubeUrl && (
              <S.Youtube
                url={props.data?.fetchBoard.youtubeUrl}
                width="486px"
                height="260px"
              />
            )}
          </S.YouTubeWrapper>
          <S.FooterWrapper>
            <S.Like>
              <S.LikeIcon
                src="/freeboard_likeicon.svg"
                onClick={props.onClickLike}
              />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.Like>
            <S.DisLike>
              <S.DislikeIcon
                src="/freeboard_dislikeicon.svg"
                onClick={props.onClickDislike}
              />
              <S.DislikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DislikeCount>
            </S.DisLike>
          </S.FooterWrapper>
        </S.BoardWrapper>
        <S.ButtonWrapper>
          <S.ListButton onClick={props.onClickMoveTolist}>
            목록으로
          </S.ListButton>
          <S.EditButton onClick={props.onClickMoveToEdit}>
            수정하기
          </S.EditButton>
          <S.DeleteButton onClick={props.onClickDelete}>
            삭제하기
          </S.DeleteButton>
        </S.ButtonWrapper>
        <S.Hr></S.Hr>
      </S.Wrapper>
    </>
  );
}
