import { Modal } from "antd";
import { useEffect, useState } from "react";
import MyPageHeartMoviePresenter from "./MyPageHeartMovie.Presenter";

export default function MyPageHeartMovieContainer() {
  const [heartMovie, setHeartMovie] = useState([]);

  useEffect(() => {
    const hearts = JSON.parse(localStorage.getItem("HeartMovie") || "[]");
    setHeartMovie(hearts);
  }, []);

  const onClickCancelHeart = (el: any) => () => {
    try {
      const hearts = JSON.parse(localStorage.getItem("HeartMovie") || "[]");
      const temp = hearts.filter(
        (basketsEl: { id: any }) => basketsEl.id !== el.id
      );

      localStorage.setItem("HeartMovie", JSON.stringify(temp));

      window.location.replace("/myPageHeartMovie");
    } catch (error: any) {
      console.log(error.message);
    }

    Modal.success({ content: "찜하기가 취소되었습니다" });
  };

  return (
    <MyPageHeartMoviePresenter
      onClickCancelHeart={onClickCancelHeart}
      heartMovie={heartMovie}
    />
  );
}
