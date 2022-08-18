import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { ILayoutHeaderStylesProps } from "./header.types";

export const Wrapper = styled.div`
  height: 50px;
  width: 100vw;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: row;
  background-color: #ff3c8d;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  position: fixed;
  z-index: 1000;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-right: 20px;
`;

export const Button2 = styled.div`
  font-weight: 300;
  font-size: 15px;
  padding-left: 15px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #e8e8e8;
  }
  &:active {
    text-decoration: underline;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 1px;
    text-underline-position: under;
  }
`;

export const HeaderIcon = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: white;
  padding-right: 30px;
  cursor: pointer;
`;

export const Button = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  padding-right: 20px;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 1px;
    text-underline-position: under;
  }
  text-decoration: ${(props: ILayoutHeaderStylesProps) =>
    props.el.page === props.activeMenu ? "underline" : "none"};

  text-decoration-color: ${(props: ILayoutHeaderStylesProps) =>
    props.el.page === props.activeMenu ? "#ffffff" : "default"};

  text-decoration-thickness: ${(props: ILayoutHeaderStylesProps) =>
    props.el.page === props.activeMenu ? "1px" : "none"};

  text-underline-position: ${(props: ILayoutHeaderStylesProps) =>
    props.el.page === props.activeMenu ? "under" : "none"};

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Button3 = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  margin-right: 10px;
  padding-top: 1px;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Button4 = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  margin-right: 10px;
  font-weight: 600;
  padding-top: 1px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

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
