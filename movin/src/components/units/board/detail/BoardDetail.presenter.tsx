import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardRoutedUIProps } from "./BoardDetail.types";
import DOMPurify from "dompurify";

export default function BoardDetailPresenter(props: IBoardRoutedUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.BoardWrapper>
          <S.HeadWrapper>
            <S.ProfileIcon src="/boardDetail/profile.svg" />
            <S.WriterBox>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreateAt>
                Date : {getDate(props.data?.fetchBoard.createdAt)}
              </S.CreateAt>
            </S.WriterBox>
            <S.Address>
              {props.data?.fetchBoard.boardAddress?.address
                .split(" ")
                .slice(0, 2)
                .join(" ")}
            </S.Address>
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
            {typeof window !== "undefined" ? (
              <S.Content
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(props.data?.fetchBoard.contents),
                }}
              />
            ) : (
              <div></div>
            )}
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
                src="/boardDetail/likeicon.svg"
                onClick={props.onClickLike}
              />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.Like>
            <S.DisLike>
              <S.DislikeIcon
                src="/boardDetail/dislikeicon.svg"
                onClick={props.onClickDislike}
              />
              <S.DislikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DislikeCount>
            </S.DisLike>
          </S.FooterWrapper>
        </S.BoardWrapper>
        <S.ButtonWrapper>
          <S.Button onClick={props.onClickMoveToPage("/boards")}>
            목록으로
          </S.Button>
          <S.Button
            onClick={props.onClickMoveToPage(`/boards/${props.BoardId}/edit`)}
          >
            수정하기
          </S.Button>
          <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
        </S.ButtonWrapper>
        <S.Hr></S.Hr>
      </S.Wrapper>
    </>
  );
}
