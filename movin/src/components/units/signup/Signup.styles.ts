import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
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
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 100px;
  background-color: #ffffff;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 50px 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #c9c9c9;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  color: #000000;
  padding-left: 10px;
`;

export const SignUpFont = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #888888;
`;

export const SignUp = styled.div`
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
`;

export const Error = styled.div`
  font-size: 10px;
  padding-top: 2px;
  padding-left: 110px;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: right;
    padding-left: 0;
    padding-right: 2px;
  }
`;

export const InputTitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

export const InputBox = styled.input`
  padding-left: 20px;
  width: 75%;
  padding-left: 10px;
  height: 50px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #cccccc;
  background-color: #f6f6f6;
  &:focus {
    outline: 1px solid #ff3c8d;
  }

  @media ${breakPoints.mobile} {
    &::placeholder {
      font-size: 11px;
      text-justify: auto;
    }
  }
`;

export const LoginBox = styled.button`
  width: 330px;
  height: 50px;
  background-color: #ff3c8d;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const LoginBox2 = styled.button`
  width: 330px;
  height: 50px;
  background-color: #cccccc;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #ffffff;
  margin-left: 10px;
  border: none;
  cursor: pointer;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0;
`;

// export const SignUpButton = styled.button`
//   background-color: ${(props) => (props.isValid ? "pink" : "default")};
// `;
