import styled from "@emotion/styled";
import { IMyPageMobileStylesProps } from "./MyPageMobile.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-top: 20px;
  cursor: pointer;

  background-size: 0% 100%;
  transition: background-size 0.8s;
  background-repeat: no-repeat;
  background-image: linear-gradient(transparent 60%, #ffcee2 40%);

  &:hover {
    background-size: 100% 100%;
  }

  background-size: ${(props: IMyPageMobileStylesProps) =>
    props.el.page === props.activeMenu ? "100% 100%" : "0% 100%"};
`;

export const MyPoint = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #4f4f4f;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  padding-top: 50px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const PayMentButton = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 70px;
  height: 25px;
  background-color: #ff3c8d;
  padding-top: 1px;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
`;
