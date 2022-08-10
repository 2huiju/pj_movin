import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";
import Slider from "react-slick";

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

export const CarouselImg = styled.img`
  height: 260px;
  cursor: pointer;
  padding: 0px 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 280px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 280px;
  }
`;

export const CarouselSlide = styled(Slider)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;

  .slick-prev:before,
  .slick-next:before {
    color: #484848;
    margin: 0 auto;
  }
`;
