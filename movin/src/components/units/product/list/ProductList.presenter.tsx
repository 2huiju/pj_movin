import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductList.styles";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import DatePickerPage from "../../../commons/DatePicker/DatePicker.container";
import Dompurify from "dompurify";
import moment from "moment";
import "moment/locale/ko";

export default function ProductListUI(props: any) {
  const myImg = /^.*[.(jpg | svg | png | jpeg | gif )]$/g;

  return (
    <>
      <S.Wrapper>
        <S.Title>상품 목록</S.Title>
        <S.HeadWrapper>
          <S.BestBox></S.BestBox>
          <S.BestBox></S.BestBox>
          <S.BestBox></S.BestBox>
          <S.BestBox></S.BestBox>
        </S.HeadWrapper>
        <S.SearchWrapper>
          <S.SearchTitle
            placeholder="제목을 검색해주세요"
            onChange={props.onChangeSearch}
          ></S.SearchTitle>
          {/* <S.SearchDate placeholder="YYYY.MM.DD ~ YYYY.MM.DD"></S.SearchDate> */}
          <S.SearchButton onClick={props.onClickSearch}>
            검색하기
          </S.SearchButton>
          <S.WriteButton onClick={props.onClickMoveToWrite}>
            상품 등록하기
          </S.WriteButton>
        </S.SearchWrapper>
        <S.ListTitleRow>
          <S.NumberRow>번호</S.NumberRow>
          <S.WriterRow>상품사진</S.WriterRow>
          <S.TitleRow>상세내용</S.TitleRow>
          <S.AtRow>가격</S.AtRow>
        </S.ListTitleRow>
        <S.ScrollWrapper>
          <InfiniteScroll
            pageStart={0}
            useWindow={false}
            loadMore={props.loadFunc}
            hasMore={true}
          >
            <S.ListWrapper>
              {props.data?.fetchUseditems.map((el: any, index: any) => (
                <S.ListRow key={el._id} onClick={props.onClickMoveToDetail(el)}>
                  <S.IndexColumn>{index + 1}</S.IndexColumn>
                  <S.ImgColumn>
                    <S.Image
                      key={el}
                      src={
                        new RegExp(myImg, "i").test(el.images[0])
                          ? `https://storage.googleapis.com/${el.images[0]}`
                          : "/movin.png"
                      }
                    />
                  </S.ImgColumn>
                  <S.ProductColumn>
                    {el.name
                      .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                      .split("#$%")
                      .map((el) => (
                        <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                          {el}
                          {/* 1.el을 split으로 키워드가 들어간 단어로 뽀개주기 2.뽀갠 내용을 맵으로 뿌려준것,, */}
                          {/* 맵으로 뿌릴때마다 저장되어있는 키워드와 같은지 아닌지 판단해서 같으면 빨간색으로 보여주기 */}
                        </S.Word>
                      ))}
                    <S.Remarks>{el.remarks}</S.Remarks>
                    {el.tags
                      .join()
                      .split(" ")
                      .map((el: any) => (
                        <S.Tags key={el}>{el}</S.Tags>
                      ))}
                    <S.Time>{moment(getDate(el.createdAt)).fromNow()}</S.Time>
                    <S.SellerColumn>
                      <S.ProfileIcon src="/freeboard_profile.svg" />
                      <S.SellerName>{el.seller.name}</S.SellerName>
                      <S.ProfileIcon src="/freeboard_heart.png" />
                      <S.SellerName>{el.pickedCount}</S.SellerName>
                    </S.SellerColumn>
                  </S.ProductColumn>
                  <S.TitleColumn>
                    <S.Price>{el.price}원</S.Price>
                  </S.TitleColumn>
                </S.ListRow>
              ))}
            </S.ListWrapper>
            <S.FooterWrapper>
              {/* <Paginations01 refetch={props.refetch} count={props.count} /> */}
            </S.FooterWrapper>
          </InfiniteScroll>
        </S.ScrollWrapper>
      </S.Wrapper>
    </>
  );
}
