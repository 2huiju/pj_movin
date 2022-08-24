import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";
import Slider from "react-slick";
import ReactTooltip from "react-tooltip";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  text-align: left;
  padding-bottom: 10px;
  padding-left: 10px;
`;

// @ts-ignore
export const CarouselSlide = styled(Slider)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;

  .slick-prev:before,
  .slick-next:before {
    color: #484848;
  }

  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;

export const CarouselImg = styled.img`
  width: 185px;
  height: 270px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.4s;
  }

  @media ${breakPoints.tablet} {
    padding: 0 5px;
    width: 100%;
    height: 300px;
  }

  @media ${breakPoints.mobile} {
    padding: 0 5px;
    width: 100%;
    height: 280px;
  }
`;

export const StyledTooltip = styled(ReactTooltip)`
  width: 200px;
  height: 100px;
  position: absolute;
  z-index: 1000;
`;
