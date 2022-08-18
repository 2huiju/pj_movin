import { useEffect, useState } from "react";
import MyPageHeartMoviePresenter from "./MyPageHeartMovie.Presenter";

export default function MyPageHeartMovieContainer() {
  const [heartMovie, setHeartMovie] = useState([]);

  useEffect(() => {
    const hearts = JSON.parse(localStorage.getItem("HeartMovie") || "[]");
    setHeartMovie(hearts);
  }, []);

  console.log("이건", heartMovie);

  return <MyPageHeartMoviePresenter heartMovie={heartMovie} />;
}
