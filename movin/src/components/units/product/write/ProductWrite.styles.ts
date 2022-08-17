// import styled from "@emotion/styled";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { breakPoints } from "../../../../commons/styles/media";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Error = styled.div`
  color: red;
  font-size: 8px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 10px;

  @media ${breakPoints.mobile} {
    padding: 100px 10px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  padding-bottom: 20px;
  padding-top: 30px;
  border-bottom: 2px solid #848484;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SerchButton = styled.div`
  width: 120px;
  height: 52px;
  background-color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  text-align: center;
  padding-top: 15px;
  margin-top: 20px;
  cursor: pointer;
`;

export const InputTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  padding-top: 40px;
  width: 15%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const InputBox = styled.input`
  margin-top: 40px;
  width: 85%;
  padding-left: 20px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  &:focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 15px;
  }
`;

export const InputBox2 = styled.input`
  padding-left: 20px;
  margin-bottom: 15px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const InputContents = styled(ReactQuill)`
  height: 400px;
  width: 85%;
  margin-top: 60px;
  margin-bottom: 60px;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 15px;
  }
`;

export const InputName = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  margin-bottom: 20px;
  border: 1px solid #bdbdbd;
`;

export const InputName2 = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
  margin-bottom: 18px;
  text-align: center;
  &:focus {
    outline: none;
  }
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

export const UploadWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const GPSWrapper = styled.div`
  display: flex;
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-right: 20px;
`;

export const MapWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 18px;
  width: 70%;

  @media ${breakPoints.mobile} {
    padding-left: 0;
    width: 100%;
  }
`;

export const Label = styled.div`
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const UploadBox = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
`;

export const MapImg = styled.div`
  margin-top: 20px;
  height: 264px;
  background-image: url(/map_default.png);
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
  border-top: 2px solid #848484;
`;

export const SubmitButton = styled.button`
  width: 195px;
  height: 60px;
  background-color: ${(props: any) =>
    props.isActive || props.isEdit ? "#ff3c8d" : "default"};
  border: 0;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

export const SubmitButton2 = styled.button`
  width: 195px;
  height: 60px;
  background-color: #cccccc;
  border: 0;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

export const Red = styled.div`
  color: red;
  font-size: 10px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 30px;
`;
