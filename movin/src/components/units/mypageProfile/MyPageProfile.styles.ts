import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 80%;
  padding: 100px 10px 100px 50px;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 100px 10px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const InputTitle = styled.div`
  font-weight: 500;
  font-size: 26px;
  display: flex;
  align-items: center;
  padding-top: 40px;
  margin-bottom: 20px;
`;

export const InputBox = styled.input`
  width: 80%;
  height: 56px;
  background-color: #e9e9e9;
  padding: 0 10px;
  border: none;
  &:focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const InputContents = styled.div`
  width: 20%;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-bottom: 10px;
  }
`;

export const SubmitButton = styled.button`
  width: 170px;
  height: 60px;
  border: 0;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  background-color: #fff0f5;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding-top: 50px;
`;

export const Error = styled.div`
  font-size: 14px;
  padding-top: 2px;
  color: #ff3c8d;
`;
