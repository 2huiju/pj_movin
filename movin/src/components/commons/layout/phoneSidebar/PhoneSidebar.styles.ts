import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const SideBarDiv = styled.div`
  display: none;
  width: ${(props) => (props.sideBar ? "100px" : "0px")};
  padding: ${(props) => (props.sideBar ? "20px 10px" : "0px")};
  height: 100vh;
  background-color: #fff3f3;
  position: fixed;
  z-index: 5000;
  top: 50px;
  transition: all 0.5s;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const SideBarTitle = styled.div`
  display: ${(props) => (props.sideBar ? "block" : "none")};
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 0;
  color: #797878;
  font-weight: 500;
  background-size: 0% 100%;
  transition: background-size 0.8s;
  background-repeat: no-repeat;
  background-image: linear-gradient(transparent 60%, #ffcee2 40%);

  &:hover {
    background-size: 90% 90%;
  }

  background-size: ${(props) =>
    props.el.page === props.activeMenu ? "90% 90%" : "0% 100%"};
`;
