import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardRouting_types";
// export interface ISubmitButtonProps {
//   backgourndColor?: any;
//   isActive: any;
//   isEdit?: any;
// }

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 100px 70px 100px;
  margin: 30px 100px 100px 100px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  padding-bottom: 40px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Label = styled.div`
  padding-bottom: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const InputName = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;

export const InputTitle = styled.input`
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;

export const InputContent = styled.textarea`
  height: 480px;
  padding-left: 10px;
  padding-top: 20px;
  border: 1px solid #bdbdbd;
  font-family: "Noto Sans CJK KR";
  &:placeholder {
    font-family: "Noto Sans CJK KR";
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
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const NumberButton = styled.button`
  width: 124px;
  height: 55px;
  padding-top: 15px;
  padding-bottom: 12px;
  text-align: center;
  margin-left: 10px;
  background-color: black;
  color: white;
  border: none;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Address1 = styled.input`
  height: 52px;
  margin: 10px 0px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Address2 = styled.input`
  height: 52px;
  margin: 10px 0px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const InputYoutube = styled.input`
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
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
  font-family: "Noto Sans CJK KR";
  font-style: normal;
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
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive || props.isEdit ? "#FFD600" : "default"};
  border: 0;
  cursor: pointer;
`;

export const Red = styled.div`
  color: red;
  font-size: 10px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 30px;
`;
