import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDate } from "../../../commons/libraries/utils";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  width: 120px;
  height: 460px;
  position: absolute;
  right: 24px;
  top: 710px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff0f5;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 10px;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 100%;
  height: 90px;
`;

export default function TodaySidebar() {
  const router = useRouter();
  const [basketItems, setBasketItems] = useState([]);
  const Today = getDate(new Date()).slice(0, 10);

  const onClickDetail = (el) => () => {
    router.push("/product/" + el._id);
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  const myImg = /^.*[.(jpg | svg | png | jpeg | gif )]$/g;

  return (
    <Wrapper>
      <Title>오늘 본 상품</Title>
      {basketItems.slice(0, 4).map((el: any) => {
        if (Today === el.date) {
          return (
            <MyRow key={el._id}>
              <Image
                key={el}
                src={
                  new RegExp(myImg, "i").test(el.images[0])
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/movin.png"
                }
                onClick={onClickDetail(el)}
              />
            </MyRow>
          );
        }
      })}
    </Wrapper>
  );
}
