import { Modal } from "antd";
import YoutubeVideoPresenter from "./YoutubeVideo.presenter";
import { IYouTubeVideoContainerProps } from "./YoutubeVideo.types";

export default function YouTubeVideoContainer(
  props: IYouTubeVideoContainerProps
) {
  const onClickCancel = () => {
    props.setYoutube(false);
  };

  const onClickHeart = () => {
    console.log("안냥", props.MovieInfo);

    const hearts = JSON.parse(localStorage.getItem("HeartMovie") || "[]");
    console.log(hearts);

    const temp = hearts.filter(
      (basketsEl: any) => basketsEl.title === props.MovieInfo.title
    );

    if (temp.length === 1) {
      Modal.warning({ content: "이미 찜한 영화입니다" });
      return;
    }

    const { __typename, ...newEl } = props.MovieInfo;
    hearts.unshift(newEl);

    localStorage.setItem("HeartMovie", JSON.stringify(hearts));

    Modal.success({
      content: "찜하기 완료! 마이페이지에서 확인 가능합니다",
    });
  };

  return (
    <YoutubeVideoPresenter
      onClickCancel={onClickCancel}
      onClickHeart={onClickHeart}
      YoutubeTitle={props.YoutubeTitle}
    />
  );
}
