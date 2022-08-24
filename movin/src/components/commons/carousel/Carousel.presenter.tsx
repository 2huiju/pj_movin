import * as S from "./Carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDetailPage1 from "./MovieDetail1";
import MovieDetailPage2 from "./MovieDetail2";
import MovieDetailPage3 from "./MovieDetail3";
import { ICarouselPresenterProps } from "./Carousel.types";

export default function CarouselPresenter(props: ICarouselPresenterProps) {
  const settings = {
    infinite: true,
    centerMode: true,
    className: "center",
    centerPadding: "0px",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 20000,
  };
  return (
    <div>
      <S.Wrapper>
        {props.isDetail1 && (
          <MovieDetailPage1 onClickCancelDetail={props.onClickCancelDetail} />
        )}
        {props.isDetail2 && (
          <MovieDetailPage2 onClickCancelDetail={props.onClickCancelDetail} />
        )}
        {props.isDetail3 && (
          <MovieDetailPage3 onClickCancelDetail={props.onClickCancelDetail} />
        )}
        <S.BannerSlide {...settings}>
          <S.ContainBox>
            <S.Title>아바타2: 물의 길</S.Title>
            <S.SubTitle>13년만에 돌아온 흥행기록의 전설</S.SubTitle>
            <S.DetailButton onClick={props.onClickDetail1}>
              상세보기
            </S.DetailButton>
            <S.YoutubeImg
              src="/banner/AvatarTrailer.gif"
              onClick={props.onClickCancelDetail}
            ></S.YoutubeImg>
          </S.ContainBox>
          <S.ContainBox>
            <S.Title>어벤져스 : 엔드게임</S.Title>
            <S.SubTitle>
              위대한 어벤져스 운명을 바꿀 최후의 전쟁이 펼쳐진다!
            </S.SubTitle>
            <S.DetailButton onClick={props.onClickDetail2}>
              상세보기
            </S.DetailButton>
            <S.YoutubeImg
              src="/banner/AvengersTrailer.gif"
              onClick={props.onClickCancelDetail}
            ></S.YoutubeImg>
          </S.ContainBox>
          <S.ContainBox>
            <S.Title>쥬라기 월드: 도미니언</S.Title>
            <S.SubTitle>
              지구의 최상위 포식자 자리를 걸고 인간과 공룡의 최후의 사투가
              펼쳐진다
            </S.SubTitle>
            <S.DetailButton onClick={props.onClickDetail3}>
              상세보기
            </S.DetailButton>
            <S.YoutubeImg
              src="/banner/JurassicTrailer.gif"
              onClick={props.onClickCancelDetail}
            ></S.YoutubeImg>
          </S.ContainBox>
        </S.BannerSlide>
      </S.Wrapper>
    </div>
  );
}
