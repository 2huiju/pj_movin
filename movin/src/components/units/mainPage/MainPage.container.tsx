// import MovieApiPagePresenter from "./openapi.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieApiPagePresenter from "./MainPage.presenter";
import { IMainPageContainerProps } from "./MainPage.types";

export default function MainPageContainer() {
  const [popularKO, setPopularKO] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topGrade, setTopGrade] = useState([]);
  const [popularUS, setPopularUS] = useState([]);
  const [popularJP, setPopularJP] = useState([]);

  const [Youtube, setYoutube] = useState(false);
  const [YoutubeTitle, setYoutubeTitle] = useState("");

  const randomPage = Math.floor(Math.random() * 5) + 1;

  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "e217e5485fff67f4c8847d1d6c499942",
      language: "ko-KO",
      region: "KR",
      page: randomPage,
    },
  });

  const api2 = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "e217e5485fff67f4c8847d1d6c499942",
      language: "ko-KO",
      region: "KR",
    },
  });

  const api3 = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "e217e5485fff67f4c8847d1d6c499942",
      language: "ko-KO",
      region: "US",
      page: randomPage,
    },
  });

  const api4 = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "e217e5485fff67f4c8847d1d6c499942",
      language: "ko-KO",
      region: "JP",
      page: randomPage,
    },
  });

  useEffect(() => {
    axios
      .all([
        api.get("movie/popular"),
        api2.get("movie/now_playing"),
        api2.get("movie/upcoming"),
        api.get("movie/top_rated"),
        api3.get("movie/popular"),
        api4.get("movie/popular"),
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5, res6) => {
          setPopularKO(res1.data.results);
          setNowPlaying(res2.data.results);
          setUpComing(res3.data.results);
          setTopGrade(res4.data.results);
          setPopularUS(res5.data.results);
          setPopularJP(res6.data.results);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const onClickDetail = (item: IMainPageContainerProps) => async () => {
    setYoutube(true);
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBa4v_jjfrWvMrb75YF5HixYp93hFO6rrg
      &part=snippet&order=viewCount&q=movie trailers ${item.original_title}&regionCode=KR&videoDefinition=high&videoDuration=short&maxResults=1&type=video`
    );
    const data = result.data.items;

    setYoutubeTitle(data[0].id.videoId);
  };

  return (
    <>
      <MovieApiPagePresenter
        popularKO={popularKO}
        nowPlaying={nowPlaying}
        upComing={upComing}
        topGrade={topGrade}
        popularUS={popularUS}
        popularJP={popularJP}
        Youtube={Youtube}
        YoutubeTitle={YoutubeTitle}
        setYoutube={setYoutube}
        onClickDetail={onClickDetail}
      />
    </>
  );
}
