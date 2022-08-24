import styled from "@emotion/styled";
import { DatePicker } from "antd";
import { breakPoints } from "../../../../commons/styles/media";
import { IBoardListStylesProps } from "./BoardList.types";

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

export const BestBoardsWrapper = styled.div`
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

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const SearchTitle = styled.input`
  width: 55%;
  height: 52px;
  padding-left: 50px;
  background: #f2f2f2;
  border-radius: 10px;
  border-style: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-image: url(/commons/search.png);
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
  border-top: 2px solid;
  border-bottom: 2px solid;
`;

export const ListTitleRow = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 17px;
  }
`;

export const IndexRow = styled.div`
  width: 5%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 10%;
  }
`;

export const TitleRow = styled.div`
  width: 65%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 55%;
  }
`;

export const WriterRow = styled.div`
  width: 15%;
  text-align: center;
`;

export const AtRow = styled.div`
  width: 15%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 25%;
  }
`;

export const ListRow = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  &:hover {
    font-weight: 500;
  }
`;

export const IndexColumn = styled.div`
  width: 5%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 10%;
  }
`;

export const TitleColumn = styled.div`
  width: 65%;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${breakPoints.mobile} {
    width: 55%;
  }
`;
export const WriterColumn = styled.div`
  width: 15%;
  text-align: center;
`;
export const AtColumn = styled.div`
  width: 15%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${breakPoints.mobile} {
    width: 25%;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
`;

export const PageImg = styled.img`
  padding: 0px 15px;
`;

export const PageNumber = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 1px 10px 0px 10px;
  color: #4f4f4f;
`;

export const WriteButton = styled.button`
  width: 171px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-image: url(/commons/pen.png);
  background-repeat: no-repeat;
  background-position: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding-left: 31px;
  padding-top: 2px;
  &:hover {
    background-color: #fff0f5;
  }
  cursor: pointer;
`;

export const Word = styled.span`
  color: ${(props: IBoardListStylesProps) =>
    props.isMatched ? "red" : "default"};
`;

export const BestImg = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 220px;

  @media ${breakPoints.tablet} {
    height: 200px;
  }

  @media ${breakPoints.mobile} {
    height: 120px;
  }
`;

export const BestContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
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

export const DateSelect = styled(DatePicker)`
  width: 15%;
  box-shadow: none;

  &:hover {
    border: 1px solid #bdbdbd;
  }

  &:focus {
    outline: 1px solid #bdbdbd;
  }
`;

export const FooterLeftWrapper = styled.div`
  width: 25%;
`;

export const WriteButtonWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: right;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-top: 30px;
  }
`;
