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
  height: 130px;
  border-bottom: 1px solid lightgray;

  @media ${breakPoints.tablet} {
    margin: 0 10px;
  }

  @media ${breakPoints.mobile} {
    margin: 0 10px;
  }
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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
  padding-left: 55px;
  padding-top: 5px;
`;

export const EditIcon = styled.img`
  width: 29px;
  height: 29px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: -2px;
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
