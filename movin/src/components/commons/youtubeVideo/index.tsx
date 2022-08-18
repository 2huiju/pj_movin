import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { CloseOutlined } from "@ant-design/icons";

const VideoWrapper = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 10px;
  padding: 10px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 5000;
`;

const CancelWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

const ReactVideo = styled(ReactPlayer)``;

const VideoBox = styled.div`
  width: 650px;
  height: 450px;
  padding: 0 10px;

  @media ${breakPoints.mobile} {
    width: 350px;
    height: 300px;
  }
`;

export default function YouTubePage(props) {
  const onClickCancel = () => {
    props.setYoutube(false);
  };

  return (
    <VideoWrapper onMouseLeave={onClickCancel}>
      <CancelWrapper>
        <CloseOutlined
          onClick={onClickCancel}
          twoToneColor="#484848"
          style={{
            fontSize: "20px",
            marginBottom: "5px",
            cursor: "pointer",
          }}
        />
      </CancelWrapper>
      <VideoBox>
        <ReactVideo
          url={"https://www.youtube.com/watch?v=" + props.YoutubeTitle}
          playing={true}
          muted={true}
          controls={true}
          width="100%"
          height="100%"
        />
      </VideoBox>
    </VideoWrapper>
  );
}
