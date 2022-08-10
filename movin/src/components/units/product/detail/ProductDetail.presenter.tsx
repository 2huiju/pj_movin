import * as S from "./ProductDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Dompurify from "dompurify";

export default function ProductDetailUI(props) {
  const myImg = /^.*[.(jpg | svg | png | jpeg | gif )]$/g;

  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.Image
          src={
            new RegExp(myImg, "i").test(props.data?.fetchUseditem.images[0])
              ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`
              : "/movin.png"
          }
        />
        <S.ContentsWrapper>
          <S.NameBox>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
            {!props.isBuying && (
              <S.EDIcon onClick={props.onClickEdit} src="/edit.png" />
            )}
          </S.NameBox>
          <S.Title>
            {props.data?.fetchUseditem.price.toLocaleString("ko-KR")}원
          </S.Title>
          <S.Writer>{props.data?.fetchUseditem.remarks}</S.Writer>
          <S.TagsWrapper>
            {props.data?.fetchUseditem.tags
              .join()
              .split(" ")
              .map((el: any) => (
                <S.Tags key={el}>{el}</S.Tags>
              ))}
          </S.TagsWrapper>
          <S.ButtonBox>
            <S.ListButton onClick={props.onClickHeart}>
              ♡ 찜 {props.data?.fetchUseditem.pickedCount}
            </S.ListButton>
            <S.ListButton onClick={props.onClickBasket}>장바구니</S.ListButton>
            <S.ListButton
              onClick={
                props.isBuying ? props.onClickBuying : props.onClickDelete
              }
            >
              {props.isBuying ? "구매" : "삭제"}하기
            </S.ListButton>
          </S.ButtonBox>
        </S.ContentsWrapper>
      </S.BoardWrapper>
      {/* <S.Hr></S.Hr> */}
      <S.BottomWrapper>
        <S.Title>상품정보</S.Title>
        <S.BoardWrapper>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.Image2 key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
          {/* <S.Image>{props.data?.fetchBoard.images}</S.Image> */}
        </S.BoardWrapper>
        {typeof window !== "undefined" ? (
          <S.Content
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          />
        ) : (
          <div></div>
        )}
        <S.Name>거래지역</S.Name>
        <S.MapImg id="map"></S.MapImg>
      </S.BottomWrapper>
      <S.Hr></S.Hr>
      <S.ButtonWrapper>
        <S.ListButton onClick={props.onClickMoveTolist}>목록으로</S.ListButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
