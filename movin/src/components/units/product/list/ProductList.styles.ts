import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IProductStylesProps } from "./ProductList.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 10px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding-bottom: 40px;
`;

export const BestItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 70px;
`;

export const BestBox = styled.div`
  width: 23%;
  height: 300px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:hover {
    width: 27%;
    transition: 1s;
  }

  @media ${breakPoints.tablet} {
    height: 200px;
  }

  @media ${breakPoints.mobile} {
    height: 120px;
  }
`;

export const BestImg = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 220px;

  @media ${breakPoints.tablet} {
    height: 200px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  @media ${breakPoints.mobile} {
    height: 120px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export const BestContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff0f5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 0;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const BestTitle = styled.div`
  width: 90%;
  display: flex block;
  justify-content: center;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BestLikeBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding-top: 7px;
`;

export const BestLikeCount = styled.div`
  padding-left: 5px;
`;

export const BestLikeCountImg = styled.img`
  width: 17px;
  height: 17px;
  margin-top: 2px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const SearchTitle = styled.input`
  width: 70%;
  height: 52px;
  padding-left: 50px;
  background: #f2f2f2;
  border-radius: 10px;
  border-style: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-image: url(/freeboard_search.png);
  background-repeat: no-repeat;
  background-position: 20px;

  &:focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const SearchDate = styled.input`
  width: 244px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  text-align: center;
`;

export const SearchButton = styled.button`
  width: 10%;
  height: 52px;
  background: #484848;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border: none;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 15%;
    font-size: 14px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListTitleRow = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-top: 2px solid #484848;
  border-bottom: 1px solid #484848;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #484848;
`;

export const NumberRow = styled.div`
  width: 5%;
  text-align: center;
`;

export const TitleRow = styled.div`
  width: 60%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const WriterRow = styled.div`
  width: 25%;
  text-align: center;
`;

export const AtRow = styled.div`
  width: 5.5%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 20%;
  }
`;

export const ListRow = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #fbf5f7;
  }

  @media ${breakPoints.mobile} {
    padding: 5px;
  }
`;

export const IndexColumn = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: #484848;
`;

export const ImgColumn = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

export const Image = styled.img`
  width: 90%;
  height: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 80%;
  }
`;

export const ProductColumn = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-left: 30px;

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const TitleColumn = styled.div`
  width: 100%;
  display: block;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Remarks = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
`;

export const Tags = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #bdbdbd;
  margin-top: 4px;
  margin-bottom: 20px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SellerColumn = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5px;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
`;

export const SellerName = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 17px;
  color: #4f4f4f;
  margin-left: 8px;
  margin-right: 10px;
`;

export const Time = styled.div`
  width: 80px;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #4f4f4f;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const ProfileIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const AtColumn = styled.div`
  width: 5%;
  text-align: center;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  position: relative;
`;

export const ScrollWrapper = styled.div`
  height: 800px;
  overflow: auto;
  border-bottom: 2px solid black;
`;

export const PageImg = styled.img`
  padding: 0px 15px;
`;

export const WriteButton = styled.button`
  width: 15%;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-image: url(/freeboard_pen.png);
  background-repeat: no-repeat;
  background-position: 15%;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #484848;
  padding-left: 30px;
  padding-top: 4px;
  &:hover {
    background-color: #fff0f5;
  }
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 25%;
  }
`;

export const Word = styled.span`
  color: ${(props: IProductStylesProps) =>
    props.isMatched ? "#ff3c8d" : "default"};
  font-weight: 500;
  font-size: 30px;
`;

export const PriceColumn = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  word-wrap: break-word;

  @media ${breakPoints.mobile} {
    width: 20%;
  }
`;

export const Price = styled.div`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;
