import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 100px 70px 100px;
  background: #ffffff;

  @media ${breakPoints.tablet} {
    padding: 150px 15px 70px 15px;
    box-shadow: none;
  }

  @media ${breakPoints.mobile} {
    padding: 150px 10px 70px 10px;
    box-shadow: none;
  }
`;

export const HeadTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  padding-bottom: 40px;
`;

export const WriterPwdBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Label = styled.div`
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const InputWriterPwd = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SpaceDiv = styled.div`
  width: 10%;
  height: 10px;
`;

export const InputTitle = styled.input`
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const InputContent = styled.textarea`
  height: 480px;
  padding-left: 10px;
  padding-top: 20px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }

  resize: none;
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const NumberCode = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  border: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const NumberButton = styled.button`
  width: 124px;
  height: 51px;
  padding-top: 15px;
  padding-bottom: 12px;
  text-align: center;
  margin-left: 10px;
  background-color: #484848;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Address = styled.input`
  height: 52px;
  margin: 10px 0px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const AddressDetail = styled.input`
  height: 52px;
  margin: 10px 0px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const InputYoutube = styled.input`
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const UploadWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
`;

export const RadioWrapper = styled.div`
  padding-bottom: 20px;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #fff0f5;
  border: 0;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 10px;
`;
