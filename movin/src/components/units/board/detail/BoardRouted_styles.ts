import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 100px 100px 100px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 100px 70px 100px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 80px;
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

export const NameWrapper = styled.div`
  width: 1050px;
  padding-left: 10px;
`;

export const Writer = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

export const CreateAt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
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
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #000000;
  padding-bottom: 40px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  padding-top: 40px;
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
  padding-top: 200px;
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
  font-family: "Noto Sans CJK KR";
  font-style: normal;
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
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #828282;
  padding-top: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 70px;
`;

export const ListButton = styled.button`
  padding: 14px 20px;
  width: 140px;
  height: 52px;
  left: 769px;
  top: 2338px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 30px;
  &:hover {
    background-color: #ffd600;
  }
  cursor: pointer;
`;

export const EditButton = styled.button`
  padding: 14px 20px;
  width: 140px;
  height: 52px;
  left: 769px;
  top: 2338px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    background-color: #ffd600;
  }
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 14px 20px;
  width: 140px;
  height: 52px;
  left: 769px;
  top: 2338px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: 30px;
  &:hover {
    background-color: #ffd600;
  }
  cursor: pointer;
`;
