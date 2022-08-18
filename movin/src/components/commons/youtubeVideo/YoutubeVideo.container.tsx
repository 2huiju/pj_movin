import YoutubeVideoPresenter from "./YoutubeVideo.presenter";

export default function YouTubeVideoContainer(props) {
  const onClickCancel = () => {
    props.setYoutube(false);
  };

  const onClickHeart = () => {
    console.log("안냥", props.MovieInfo);

    const hearts = JSON.parse(localStorage.getItem("HeartMovie") || "[]");
    console.log(hearts);

    const temp = hearts.filter(
      (basketsEl) => basketsEl.title === props.MovieInfo.title
    );

    if (temp.length === 1) {
      return;
    }

    const { __typename, ...newEl } = props.MovieInfo;
    hearts.unshift(newEl);

    localStorage.setItem("HeartMovie", JSON.stringify(hearts));
  };

  return (
    <YoutubeVideoPresenter
      onClickCancel={onClickCancel}
      onClickHeart={onClickHeart}
      YoutubeTitle={props.YoutubeTitle}
    />
  );
}
