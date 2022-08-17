import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 10px;

  @media ${breakPoints.mobile} {
    padding: 100px 10px;
  }
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 80px;

  @media ${breakPoints.mobile} {
    display: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CarouselSlide = styled(Slider)`
  width: 35%;
  height: 500px;
  margin-right: 30px;

  .slick-prev:before,
  .slick-next:before {
    color: #b4b4b4;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    width: 90%;
    margin-right: 0;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-top: 10px;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  display: flex;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-top: 40px;
  }
`;

export const SellerColumn = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5px;
  font-weight: 500;
  font-size: 16px;
`;

export const SellerName = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 17px;
  margin-left: 8px;
  margin-top: -2px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const NameWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const Remarks = styled.div`
  padding: 30px 0;
  height: 170px;
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
  background-color: #fff0f5;
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
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  padding-top: 33px;
`;

export const CreateAt = styled.div`
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
  font-weight: 600;
  font-size: 36px;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`;

export const ListButton = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 15px;
  &:hover {
    background-color: #ff3c8d;
    border: none;
    color: #ffffff;
  }
  cursor: pointer;

  @media ${breakPoints.mobile} {
    height: 50px;
  }
`;

export const EditButton = styled.button`
  padding: 14px 20px;
  width: 140px;
  height: 52px;
  left: 769px;
  top: 2338px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
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

export const ContentDiv = styled.div`
  padding: 50px 0;
`;
