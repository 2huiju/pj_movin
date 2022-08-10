import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.tablet} {
    height: 400px;
  }

  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;

export const ContainBox = styled.div`
  position: relative;
  height: 500px;

  @media ${breakPoints.tablet} {
    height: 400px;
  }

  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;

export const Title = styled.div`
  top: 180px;
  left: 170px;
  position: absolute;
  z-index: 2;
  font-size: 50px;
  font-weight: 800;
  color: #ffffff;

  @media ${breakPoints.tablet} {
    top: 140px;
    left: 100px;
    font-size: 40px;
  }

  @media ${breakPoints.mobile} {
    top: 90px;
    left: 25px;
    font-size: 30px;
  }
`;

export const SubTitle = styled.div`
  top: 260px;
  left: 170px;
  position: absolute;
  z-index: 2;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;

  @media ${breakPoints.tablet} {
    top: 200px;
    left: 100px;
    font-size: 16px;
  }

  @media ${breakPoints.mobile} {
    top: 140px;
    left: 25px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
`;

export const BannerSlide = styled(Slider)`
  width: 100%;
  margin-bottom: 30px;
`;

export const DetailButton = styled.div`
  background-color: #ff3c8d;
  top: 330px;
  left: 170px;
  width: 7em;
  height: 2em;
  position: absolute;
  z-index: 10;
  border-radius: 15px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding-top: 3px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const YoutubeImg = styled.img`
  width: 100%;
  height: 100%;
`;
