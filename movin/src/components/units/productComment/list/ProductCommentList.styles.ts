import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  /* width: 1200px;
  margin: 0px 200px 30px 200px; */
  /* padding-bottom: 30px; */
  width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 10px 300px;
  padding: 0px 0px 30px 0px;
  border-bottom: 1px solid lightgray;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

export const CommentWrite = styled.textarea`
  width: 99%;
  height: 70px;
  margin-top: 20px;
  padding-left: 1%;
  padding-top: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  &:placeholder {
    font-family: "Noto Sans CJK KR";
  }
  resize: none;
  margin-bottom: 0;
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
  color: #bdbdbd;
`;

export const CommentButton = styled.button`
  width: 10%;
  height: 44px;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
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

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  padding-top: 5px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const WriterWrapper = styled.div``;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export const Heart = styled(Rate)`
  color: hotpink;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CreateTime = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  padding-left: 55px;
  padding-top: 5px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 10px;
`;

export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const BoardCommentListUiItem = styled.div``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
