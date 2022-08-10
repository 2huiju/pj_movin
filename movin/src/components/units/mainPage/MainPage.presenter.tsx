import * as S from "./MainPage.styles";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from "antd";
import YouTubePage from "../../commons/youtubeVideo";
import { IMainPagePresenterProps } from "./MainPage.types";
import LayoutBanner from "../../commons/layout/banner";

export default function MainPagePresenter(props: IMainPagePresenterProps) {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 6,
    arrows: true,
    slidesToScroll: 1,
    speed: 500,
    slidesPerRow: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <S.Wrapper>
      <LayoutBanner />
      <S.Title>인기 많은 영화</S.Title>
      <S.CarouselSlide {...settings}>
        {props.popularKO?.map((item: any) => (
          <div key={item.id}>
            <Tooltip
              color="white"
              placement="right"
              title={
                <YouTubePage
                  setYoutube={props.setYoutube}
                  YoutubeTitle={props.YoutubeTitle}
                />
              }
            >
              <S.CarouselImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                onMouseEnter={props.onClickDetail(item)}
              />
            </Tooltip>
          </div>
        ))}
      </S.CarouselSlide>
      <S.Title>현재 상영중인 영화</S.Title>
      <S.CarouselSlide {...settings}>
        {props.nowPlaying.map((item: any) => (
          <div key={item.id}>
            <Tooltip
              color="white"
              placement="right"
              title={
                <YouTubePage
                  setYoutube={props.setYoutube}
                  YoutubeTitle={props.YoutubeTitle}
                />
              }
            >
              <S.CarouselImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                onMouseEnter={props.onClickDetail(item)}
              />
            </Tooltip>
          </div>
        ))}
      </S.CarouselSlide>
      <S.Title>개봉 예정작</S.Title>
      <S.CarouselSlide {...settings}>
        {props.upComing.map((item: any) => (
          <div key={item.id}>
            <Tooltip
              placement="right"
              title={
                <YouTubePage
                  setYoutube={props.setYoutube}
                  YoutubeTitle={props.YoutubeTitle}
                />
              }
            >
              <S.CarouselImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                onMouseEnter={props.onClickDetail(item)}
              />
            </Tooltip>
          </div>
        ))}
      </S.CarouselSlide>
      <S.Title>평점 높은 영화</S.Title>
      <S.CarouselSlide {...settings}>
        {props.topGrade.map((item: any) => (
          <div key={item.id}>
            <Tooltip
              placement="right"
              title={
                <YouTubePage
                  setYoutube={props.setYoutube}
                  YoutubeTitle={props.YoutubeTitle}
                />
              }
            >
              <S.CarouselImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                onMouseEnter={props.onClickDetail(item)}
              />
            </Tooltip>
          </div>
        ))}
      </S.CarouselSlide>
      <S.Title>미국 인기 영화</S.Title>
      <S.CarouselSlide {...settings}>
        {props.popularUS.map((item: any) => (
          <div key={item.id}>
            <Tooltip
              placement="right"
              title={
                <YouTubePage
                  setYoutube={props.setYoutube}
                  YoutubeTitle={props.YoutubeTitle}
                />
              }
            >
              <S.CarouselImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                onMouseEnter={props.onClickDetail(item)}
              />
            </Tooltip>
          </div>
        ))}
      </S.CarouselSlide>
      <S.Title>일본 인기 영화</S.Title>
      <S.CarouselSlide {...settings}>
        {props.popularJP.map((item: any) => (
          <div key={item.id}>
            <Tooltip
              placement="right"
              title={
                <YouTubePage
                  setYoutube={props.setYoutube}
                  YoutubeTitle={props.YoutubeTitle}
                />
              }
            >
              <S.CarouselImg
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                onMouseEnter={props.onClickDetail(item)}
              />
            </Tooltip>
          </div>
        ))}
      </S.CarouselSlide>
    </S.Wrapper>
  );
}
