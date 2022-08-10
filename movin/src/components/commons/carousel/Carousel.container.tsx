import React, { useState } from "react";
import CarouselPresenter from "./Carousel.presenter";

export default function CarouselContainer() {
  const [isDetail1, setIsDetail1] = useState(false);
  const [isDetail2, setIsDetail2] = useState(false);
  const [isDetail3, setIsDetail3] = useState(false);

  const onClickDetail1 = () => {
    setIsDetail1((prev) => !prev);
  };

  const onClickDetail2 = () => {
    setIsDetail2((prev) => !prev);
  };

  const onClickDetail3 = () => {
    setIsDetail3((prev) => !prev);
  };

  const onClickCancelDetail = () => {
    setIsDetail1(false);
    setIsDetail2(false);
    setIsDetail3(false);
  };

  return (
    <CarouselPresenter
      isDetail1={isDetail1}
      isDetail2={isDetail2}
      isDetail3={isDetail3}
      onClickDetail1={onClickDetail1}
      onClickDetail2={onClickDetail2}
      onClickDetail3={onClickDetail3}
      onClickCancelDetail={onClickCancelDetail}
    />
  );
}
