import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  background-color: #f8f8f8;

  @media ${breakPoints.mobile} {
    background-color: #ffffff;
  }
`;

export const SubWrapper = styled.div`
  width: 642px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 100px 40px 100px;
  background-color: #ffffff;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 60px 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #c9c9c9;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  padding-left: 10px;
`;

export const SignUpFont = styled.div`
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #888888;
`;

export const SignUp = styled.div`
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
`;

export const Error = styled.div`
  font-size: 10px;
  padding-top: 5px;
  padding-left: 2px;
`;

export const InputBox = styled.input`
  margin-top: 40px;
  padding-left: 20px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  background-color: #f6f6f6;
  &:focus {
    outline: 1px solid #ff3c8d;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  background-color: #ff3c8d;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const LoginBox = styled.div``;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
`;
