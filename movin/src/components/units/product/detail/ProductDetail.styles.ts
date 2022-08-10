import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 100px 30px 200px;
  padding: 10px 100px 0px 100px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-top: 10px;
`;

export const Name = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  margin-right: 650px;
  margin-bottom: 30px;
`;

export const EDIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

export const NameBox = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-top: 10px;
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
  padding: 30px;
  height: 170px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
`;

export const TagsWrapper = styled.div`
  display: flex;
  padding-bottom: 28px;
`;

export const Tags = styled.div`
  width: 100px;
  height: 30px;
  background-color: #ffe004;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  border-radius: 10px;
  padding-top: 8px;
  margin-right: 10px;
`;
export const ButtonBox = styled.div`
  padding-top: 30px;
  display: flex;
  border-top: 1px solid #c0c0c0;
  flex-direction: row;
  justify-content: space-between;
`;

export const PickButton = styled.div`
  width: 152px;
  height: 100px;
  text-align: center;
  color: white;
  background-color: #c9c9c9;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  padding-top: 33px;
`;

export const BasketButton = styled.div`
  width: 312px;
  height: 100px;
  text-align: center;
  color: white;
  background-color: #a0a0a0;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  padding-top: 33px;
  cursor: pointer;
`;

export const BuyButton = styled.div`
  width: 312px;
  height: 100px;
  text-align: center;
  color: white;
  background-color: #000000;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  padding-top: 33px;
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
  margin-top: 100px;
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
  padding-bottom: 10px;
  border-bottom: 3px solid #555555;
`;

export const Image = styled.img`
  width: 35%;
  height: 500px;
  margin-right: 30px;
`;

export const Image2 = styled.img`
  width: 447px;
  height: 446px;
  margin-top: 30px;
`;

export const Content = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const MapImg = styled.div`
  width: 100%;
  height: 500px;
  background-color: pink;
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
  padding-bottom: 20px;
`;

export const ListButton = styled.button`
  padding: 14px 20px;
  width: 280px;
  height: 80px;
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
  margin-top: 20px;
  &:hover {
    background-color: #bdbdbd;
    color: #ffffff;
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
