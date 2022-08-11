import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 150px 0 80px 0;

  @media ${breakPoints.tablet} {
    padding: 0;
  }

  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 100px 70px 100px;
  margin-bottom: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.tablet} {
    padding: 150px 15px 70px 15px;
    box-shadow: none;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 0;
    padding: 100px 10px 70px 10px;
    box-shadow: none;
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileIcon = styled.img`
  width: 46px;
  height: 46px;
  padding-bottom: 5px;
`;

export const WriterBox = styled.div`
  width: 70%;
  padding-left: 10px;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

export const CreateAt = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const Address = styled.div`
  display: flex;
  justify-content: right;
  width: 30%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const Hr = styled.hr`
  width: 100%;
  color: #bdbdbd;
`;

export const FileIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const MapIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const MainWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 100px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 100px;
  word-break: break-all;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  word-break: break-all;
`;

export const YouTubeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 100px;
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const LikeIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
  padding-top: 8px;
`;

export const DisLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

export const DislikeIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const DislikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #828282;
  padding-top: 8px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 70px;
`;

export const Button = styled.button`
  padding: 14px 20px;
  width: 140px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    background-color: #fff0f5;
  }

  @media ${breakPoints.mobile} {
    margin: 0 10px;
  }
`;
