import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const VideoWrapper = styled.div`
  background-color: black;
  width: 500px;
  height: 300px;

  @media ${breakPoints.tablet} {
    width: 400px;
    height: 250px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
    height: 250px;
  }
`;

const ReactVideo = styled(ReactPlayer)`
  width: 500px;
  height: 300px;

  @media ${breakPoints.tablet} {
    width: 400px;
    height: 250px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
    height: 250px;
  }
`;

export default function YouTubePage(props) {
  const onClickCancel = () => {
    props.setYoutube(false);
  };

  return (
    <VideoWrapper>
      <ReactVideo
        url={"https://www.youtube.com/watch?v=" + props.YoutubeTitle}
        playing={true}
        muted={true}
        controls={true}
        onMouseLeave={onClickCancel}
        width="500px"
        height="300px"
      />
    </VideoWrapper>
  );
}
