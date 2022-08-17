import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  padding-bottom: 30px;

  @media ${breakPoints.tablet} {
    margin: 0 10px;
  }

  @media ${breakPoints.mobile} {
    margin: 0 10px;
  }
`;

export const CommentAnswerWrapper = styled.div`
  width: 100%;
  padding-top: 25px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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
`;

export const Heart = styled(Rate)`
  color: hotpink;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
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
  padding-left: 59px;
  padding-top: 7px;
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
  width: 20px;
  height: 20px;
`;

export const BoardCommentListUiItem = styled.div``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const CommentAnswer = styled.div`
  width: 50px;
  height: 22px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const AnswerBox = styled.div`
  display: flex;
  align-items: center;
`;
