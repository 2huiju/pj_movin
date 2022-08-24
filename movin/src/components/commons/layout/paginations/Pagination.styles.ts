import styled from "@emotion/styled";
import { IPaginations01StylesProps } from "./Pagination.types";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyRow = styled.div`
  display: flex;
  border-bottom: 1px solid pink;
`;

export const MyColumn = styled.div`
  width: 100%;
  border-right: 1px solid pink;
  text-align: center;
`;

export const PageSpan = styled.span`
  font-size: 17px;
  color: ${(props: IPaginations01StylesProps) =>
    props.isActive ? "#ff3c8d" : "default"};
  font-weight: ${(props) => (props.isActive ? 500 : "normal")};
  margin: 0px 10px;
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};
`;

export const Button = styled.img`
  cursor: pointer;
  margin: 0 5px;
`;
