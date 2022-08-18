import * as Y from "./YoutubeVideo.styles";
import { CloseOutlined, HeartTwoTone, HeartOutlined } from "@ant-design/icons";

export default function YoutubeVideoPresenter(props) {
  return (
    <Y.VideoWrapper onMouseLeave={props.onClickCancel}>
      <Y.CancelWrapper>
        <HeartOutlined
          onClick={props.onClickHeart}
          style={{
            fontSize: "20px",
            color: "#ff3c8d",
            marginBottom: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        />
        <HeartTwoTone
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