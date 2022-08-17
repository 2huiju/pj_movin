import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  padding: 140px 10px 100px 50px;
  display: flex;
  flex-direction: column;
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FetchButton = styled.div`
  width: 70px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  cursor: pointer;
  &:hover {
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: #ff3c8d;
  }
  margin-bottom: 30px;
  margin-right: 10px;

  font-weight: ${(props) =>
    props.el.name === props.activeMenu ? "500" : "400"};

  text-decoration: ${(props) =>
    props.el.name === props.activeMenu ? "underline" : "none"};

  text-decoration-color: ${(props) =>
    props.el.name === props.activeMenu ? "#ff3c8d" : "none"};
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 70px;
`;

export const BestBox = styled.div`
  width: 282px;
  height: 257px;
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
  width: 600px;
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
  width: 94px;
  height: 52px;
  left: 1466px;
  top: 1115px;
  background: #000000;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
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
  color: #000000;
  border-top: 2px solid;
  border-bottom: 2px solid;
`;

export const NumberRow = styled.div`
  width: 15%;
  text-align: center;
`;

export const TitleRow = styled.div`
  width: 45%;
  text-align: center;
`;

export const WriterRow = styled.div`
  width: 20%;
  text-align: center;
`;

export const AtRow = styled.div`
  width: 20%;
  text-align: center;
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
  color: #4f4f4f;
`;

export const IndexColumn = styled.div`
  width: 15%;
  text-align: center;
`;

export const TitleColumn = styled.div`
  width: 45%;
  text-align: center;
`;
export const WriterColumn = styled.div`
  width: 20%;
  text-align: center;
  font-weight: 600;
`;
export const AtColumn = styled.div`
  width: 20%;
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

export const PageImg = styled.img`
  padding: 0px 15px;
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
  width: 171px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-image: url(/freeboard_pen.png);
  background-repeat: no-repeat;
  background-position: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding-left: 30px;
  padding-top: 4px;
  position: absolute;
  right: 0;
  &:hover {
    background-color: #ffd600;
  }
  cursor: pointer;
`;

export const Word = styled.span`
  color: ${(props: any) => (props.isMatched ? "red" : "default")};
`;
