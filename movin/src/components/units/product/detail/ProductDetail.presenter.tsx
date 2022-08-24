import * as S from "./ProductDetail.styles";
import Dompurify from "dompurify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MapPageDetail from "../../../commons/map/productDetail";
import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  const myImg = /^.*[.(jpg | svg | png | jpeg | gif )]$/g;

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    slidesPerRow: 1,
    draggable: true,
    autoplay: false,
    centerPadding: "0px",
  };

  return (
    <S.Wrapper>
      <S.BoardWrapper>
        {props.data?.fetchUseditem.images.filter((el: any) => el !== "")
          .length > 1 ? (
          <S.CarouselSlide {...settings}>
            {props.data?.fetchUseditem.images.map((el: any) => (
              <S.Image
                key={el.index}
                src={
                  new RegExp(myImg, "i").test(el)
                    ? `https://storage.googleapis.com/${el}`
                    : "/commons/movin.png"
                }
              />
            ))}
          </S.CarouselSlide>
        ) : (
          <S.Image
            src={
              new RegExp(myImg, "i").test(props.data?.fetchUseditem.images[0])
                ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`
                : "/commons/movin.png"
            }
          />
        )}

        <S.ContentsWrapper>
          <S.SellerColumn>
            <S.ProfileIcon src="/commons/profile.svg" />
            <S.SellerName>{props.data?.fetchUseditem.seller.name}</S.SellerName>
          </S.SellerColumn>
          <S.NameBox>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          </S.NameBox>
          <S.Title>
            {props.data?.fetchUseditem.price.toLocaleString("ko-KR")}원
          </S.Title>
          <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
          <S.TagsWrapper>
            {props.data?.fetchUseditem.tags?.map((el: any) => (
              <S.Tags key={el}># {el}</S.Tags>
            ))}
          </S.TagsWrapper>
          <S.ButtonBox>
            {props.isBuying ? (
              <>
                <S.ListButton onClick={props.onClickHeart}>
                  ♡ 찜 {props.data?.fetchUseditem.pickedCount}
                </S.ListButton>
                <S.ListButton onClick={props.onClickBuying}>
                  구매하기
                </S.ListButton>
              </>
            ) : (
              <>
                <S.ListButton onClick={props.onClickEdit}>
                  수정하기
                </S.ListButton>
                <S.ListButton onClick={props.onClickDelete}>
                  삭제하기
                </S.ListButton>
              </>
            )}
          </S.ButtonBox>
        </S.ContentsWrapper>
      </S.BoardWrapper>
      <S.BottomWrapper>
        <S.Title>상품정보</S.Title>
        <S.ContentDiv>
          {typeof window !== "undefined" ? (
            <S.Content
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            />
          ) : (
            <div></div>
          )}
        </S.ContentDiv>
        <S.Name>거래지역</S.Name>
        <MapPageDetail
          Address={props.Address}
          setLng={undefined}
          setLat={undefined}
        />
      </S.BottomWrapper>
      <S.Hr></S.Hr>
      <S.ButtonWrapper>
        <S.ListButton onClick={props.onClickMoveToList}>목록으로</S.ListButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
