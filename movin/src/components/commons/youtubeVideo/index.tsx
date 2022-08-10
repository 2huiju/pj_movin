import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  width: 500px;
  left: 90vh;
  top: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 80;
  background-color: black;
`;

export default function YouTubePage(props) {
  const onClickCancel = () => {
    props.setYoutube(false);
  };

  return (
    <VideoWrapper>
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=" + props.YoutubeTitle}
        playing={true}
        width="500px"
        height="300px"
        muted={true}
        controls={true}
        onMouseLeave={onClickCancel}
      />
    </VideoWrapper>
  );
}
