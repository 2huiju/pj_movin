import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const UploadButton = styled.button`
  width: 150px;
  height: 150px;
  margin-right: 20px;
  background-color: #bdbdbd;
  border: 0;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 110px;
    height: 110px;
  }
`;

export const UploadImg = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 20px;
  border: 0;

  @media ${breakPoints.mobile} {
    width: 110px;
    height: 110px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

export const UploadWrapper = styled.div`
  padding: 10px 10px 10px 0px;

  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;
