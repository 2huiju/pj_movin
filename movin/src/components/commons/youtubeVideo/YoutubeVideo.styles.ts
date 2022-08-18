import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const VideoWrapper = styled.div`
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

export const CancelWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

export const ReactVideo = styled(ReactPlayer)``;

export const VideoBox = styled.div`
  width: 650px;
  height: 450px;
  padding: 0 10px;

  @media ${breakPoints.mobile} {
    width: 350px;
    height: 300px;
  }
`;
