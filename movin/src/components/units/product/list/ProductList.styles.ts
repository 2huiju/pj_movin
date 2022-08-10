import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 100px 100px 270px;
  padding: 10px 100px 0px 100px;
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding-bottom: 40px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 70px;
`;

export const BestBox = styled.div`
  width: 300px;
  height: 270px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const SearchTitle = styled.input`
  width: 1030px;
  height: 52px;
  padding-left: 50px;
  background: #f2f2f2;
  border-radius: 10px;
  border-style: none;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  background-image: url(/freeboard_search.png);
  background-repeat: no-repeat;
  background-position: 20px;
  &:focus {
    outline: none;
  }
`;

export const SearchDate = styled.input`
  width: 244px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  text-align: center;
`;

export const SearchButton = styled.button`
  width: 110px;
  height: 52px;
  left: 1466px;
  top: 1115px;
  background: #000000;
  border-radius: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* border-top: 2px solid black; */
  /* border-bottom: 2px solid black; */
`;

export const ListTitleRow = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #000000;
`;

export const NumberRow = styled.div`
  width: 5%;
  text-align: center;
`;

export const TitleRow = styled.div`
  width: 60%;
  text-align: center;
`;

export const WriterRow = styled.div`
  width: 25%;
  text-align: center;
`;

export const AtRow = styled.div`
  width: 5.5%;
  text-align: center;
`;

export const ListRow = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  &:hover {
    color: #ffd600;
  }
`;

export const IndexColumn = styled.div`
  width: 5%;
  text-align: center;
  padding-top: 85px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  color: #a9a9a9;
`;

export const TitleColumn = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
  word-wrap: break-word;
`;
export const ImgColumn = styled.div`
  width: 25%;
  text-align: center;
`;

export const ProductColumn = styled.div`
  width: 60%;
  text-align: left;
  padding-left: 30px;
  &:hover {
    color: #ffd600;
    cursor: pointer;
  }
  padding-top: 10px;
`;

export const Remarks = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #4f4f4f;
  margin-top: 10px;
`;

export const Tags = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #bdbdbd;
  margin-top: 4px;
  margin-bottom: 20px;
`;

export const SellerColumn = styled.div`
  display: flex;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const SellerName = styled.div`
  width: 80px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #4f4f4f;
  margin-left: 8px;
  margin-right: 10px;
`;

export const Time = styled.div`
  width: 80px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #4f4f4f;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
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

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const PageNumber = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  /* text-decoration-line: underline; */
  padding: 1px 10px 0px 10px;
  color: #4f4f4f;
`;

export const WriteButton = styled.button`
  width: 200px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-image: url(/freeboard_pen.png);
  background-repeat: no-repeat;
  background-position: 30px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding-left: 30px;
  padding-top: 4px;
  &:hover {
    background-color: #f2f2f2;
  }
  cursor: pointer;
`;

export const Word = styled.span`
  color: ${(props: any) => (props.isMatched ? "red" : "default")};
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
`;

export const Price = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #000000;
  padding-top: 85px;
  padding-right: 20px;
`;
