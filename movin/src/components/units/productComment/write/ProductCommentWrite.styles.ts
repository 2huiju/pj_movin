import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 100px 50px 200px;
  padding: 10px 100px 70px 100px;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
`;

export const CommentTitle = styled.div`
  background-image: url(/freeboard_comment.png);
  background-repeat: no-repeat;
  background-position: 0px;
  padding: 20px 0px 24px 30px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
  margin-right: 20px;
`;

export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding-left: 20px;
  margin-right: 20px;
`;

export const Heart = styled(Rate)`
  color: hotpink;
`;

export const CommentWrite = styled.textarea`
  width: 99%;
  height: 70px;
  margin-top: 20px;
  padding-left: 1%;
  padding-top: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  font-family: "Noto Sans CJK KR";
  &:placeholder {
    font-family: "Noto Sans CJK KR";
  }
  resize: none;
  margin-bottom: 0;
  &:focus {
    outline: none;
  }
`;

export const CommentBoard = styled.div`
  display: flex;
  margin: 0;
`;

export const CommentNumber = styled.div`
  width: 90%;
  height: 44px;
  border: 1px solid #bdbdbd;
  text-justify: center;
  padding-left: 20px;
  padding-top: 10px;
  font-family: "Noto Sans CJK KR";
  color: #bdbdbd;
`;

export const CommentButton = styled.button`
  width: 10%;
  height: 44px;
  background: #000000;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;

export const CommentStar = styled.div``;

export const Red = styled.div`
  color: red;
  font-size: 8px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 30px;
`;
