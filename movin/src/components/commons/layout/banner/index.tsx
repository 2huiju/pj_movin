import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselContainer from "../../carousel/Carousel.container";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 60px;
  margin-bottom: 80px;
`;

export default function LayoutBanner() {
  return (
    <Wrapper>
      <CarouselContainer />
    </Wrapper>
  );
}
