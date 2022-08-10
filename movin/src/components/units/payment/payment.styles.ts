import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const PayMentWrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
  z-index: 50;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media ${breakPoints.mobile} {
    width: 350px;
  }
`;

export const ChargeButton = styled.div`
  background-color: #ff3c8d;
  color: #ffffff;
  width: 350px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const CancelImg = styled.img`
  width: 20px;
  margin-left: 95%;
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  padding-top: 50px;
`;

export const SelectBox = styled.div`
  padding: 10px;
  width: 350px;
  height: 40px;
  margin: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  border: none;
  border-bottom: 2px solid;
  &:focus {
    outline: none;
  }
  background-repeat: no-repeat;
  background-image: url("https://img.icons8.com/material-rounded/24/000000/expand-arrow.png");
  background-position: right;
  cursor: pointer;
  display: inline-block;

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const Price = styled.li`
  padding: 7px 0px 5px 0px;
  margin-top: 10px;
  list-style: none;
  color: #828282;
  &:hover {
    font-weight: 700;
    font-size: 17px;
  }
`;

export const MoneyOption = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  top: 0;
  left: 0;
`;

export const MoneyWrapper = styled.div`
  margin-top: 20px;
`;
