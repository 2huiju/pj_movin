import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    padding: 0 10px;
  }

  @media ${breakPoints.mobile} {
    padding: 0 10px;
  }
`;

export const AnswerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentTitle = styled.div`
  background-image: url(/freeboard_comment.png);
  background-repeat: no-repeat;
  background-position: 0px;
  padding: 20px 0px 24px 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
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

export const CommentContents = styled.textarea`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: none;
  display: block;
  resize: none;
  &:placeholder {
    font-family: "Noto Sans CJK KR";
  }
  &:focus {
    outline: none;
  }

  @media ${breakPoints.tablet} {
    height: 105px;
  }

  @media ${breakPoints.mobile} {
    height: 105px;
  }
`;

export const CommentBox = styled.div`
  display: flex;
`;

export const CommentLength = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid #bdbdbd;
  text-justify: center;
  padding-left: 20px;
  padding-top: 10px;
  color: #bdbdbd;
`;

export const CommentButton = styled.button`
  width: 100px;
  height: 44px;
  background: #484848;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const CommentStar = styled.div``;

export const Error = styled.div`
  font-size: 8px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 30px;
`;
