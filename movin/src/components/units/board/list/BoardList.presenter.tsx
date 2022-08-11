import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/layout/paginations/01/pagination_container";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardListPresenter(props: IBoardListUIProps) {
  const myImg = /^.*[.(jpg | svg | png | jpeg | gif )]$/g;

  return (
    <>
      <S.Wrapper>
        <S.Title>베스트 게시글</S.Title>
        <S.BestBoardsWrapper>
          {props.BoardsBestData?.fetchBoardsOfTheBest.map((el: any) => (
            <S.BestBox
              key={el._id}
              onClick={props.onClickMoveToPage(`/boards/${el._id}`)}
            >
              <S.BestImg
                src={
                  new RegExp(myImg, "i").test(el.images[0])
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/movin.png"
                }
              />
              <S.BestContentBox>
                <S.BestTitle>{el.title}</S.BestTitle>
                <S.BestLikeBox>
                  <S.BestLikeCountImg src="/BoardList/LikeCount.png" />
                  <S.BestLikeCount>{el.likeCount}</S.BestLikeCount>
                </S.BestLikeBox>
              </S.BestContentBox>
            </S.BestBox>
          ))}
        </S.BestBoardsWrapper>
        <S.SearchWrapper>
          <S.SearchTitle
            placeholder="제목을 검색해주세요"
            onChange={props.onChangeSearch}
          ></S.SearchTitle>
          <S.DateSelect onChange={props.onChangeStartDate} />
          <S.DateSelect onChange={props.onChangeEndDate} />
          <S.SearchButton onClick={props.onClickSearch}>
            검색하기
          </S.SearchButton>
        </S.SearchWrapper>
        <S.ListWrapper>
          <S.ListTitleRow>
            <S.IndexRow>번호</S.IndexRow>
            <S.TitleRow>제목</S.TitleRow>
            <S.WriterRow>작성자</S.WriterRow>
            <S.AtRow>날짜</S.AtRow>
          </S.ListTitleRow>
          {props.data?.fetchBoards.map((el: any, index: any) => (
            <S.ListRow key={el._id}>
              <S.IndexColumn>{index + 1}</S.IndexColumn>
              <S.TitleColumn id={el._id} onClick={props.onClickMoveToDetail}>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((el: any) => (
                    <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                      {el}
                    </S.Word>
                  ))}
              </S.TitleColumn>
              <S.WriterColumn>{el.writer}</S.WriterColumn>
              <S.AtColumn>{getDate(el.createdAt)}</S.AtColumn>
            </S.ListRow>
          ))}
        </S.ListWrapper>
        <S.FooterWrapper>
          <S.FooterLeftWrapper></S.FooterLeftWrapper>
          <Paginations01 refetch={props.refetch} count={props.count} />
          <S.WriteButtonWrapper>
            <S.WriteButton onClick={props.onClickMoveToPage("/boards/new")}>
              게시물 등록하기
            </S.WriteButton>
          </S.WriteButtonWrapper>
        </S.FooterWrapper>
      </S.Wrapper>
    </>
  );
}
