import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Hamburger = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 10px;
  cursor: pointer;
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin: 30px 100px 100px 100px;
  padding: 110px 80px 0px 80px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputBox = styled.input`
  margin-top: 40px;
  width: 1100px;
  padding-left: 20px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const InputTitle = styled.div`
  font-weight: 500;
  font-size: 26px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  padding-top: 40px;
  margin-bottom: 20px;
`;

export const InputContents = styled.div`
  width: 200px;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  padding-top: 40px;
`;

export const SubmitButton = styled.button`
  width: 170px;
  height: 60px;
  border: 0;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.05em;
  background-color: #cccccc;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding-top: 50px;
`;

export const Error = styled.div`
  color: black;
  font-size: 14px;
  padding-top: 2px;
  padding-left: 160px;
`;
