import * as Y from "./YoutubeVideo.styles";
import { CloseOutlined, HeartTwoTone } from "@ant-design/icons";
import { IYoutubeVideoPresenterProps } from "./YoutubeVideo.types";

export default function YoutubeVideoPresenter(
  props: IYoutubeVideoPresenterProps
) {
  return (
    <Y.VideoWrapper onMouseLeave={props.onClickCancel}>
      <Y.CancelWrapper>
        <HeartTwoTone
          onClick={props.onClickHeart}
          style={{
            fontSize: "20px",
            marginBottom: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          twoToneColor="#ff3c8d"
        />
        <CloseOutlined
          onClick={props.onClickCancel}
          twoToneColor="#484848"
          style={{
            fontSize: "20px",
            marginBottom: "5px",
            marginRight: "5px",
            cursor: "pointer",
          }}
        />
      </Y.CancelWrapper>
      <Y.VideoBox>
        <Y.ReactVideo
          url={"https://www.youtube.com/watch?v=" + props.YoutubeTitle}
          playing={true}
          muted={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </Y.VideoBox>
    </Y.VideoWrapper>
  );
}
