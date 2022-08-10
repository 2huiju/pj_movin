import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDate } from "../../../commons/libraries/utils";

const Wrapper = styled.div`
  width: 155px;
  height: 600px;
  position: sticky;
  border: 1px solid;
  text-align: center;
  top: 220px;
  right: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin: 10px 0px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 85px;
  height: 85px;
  margin-top: 10px;
  margin-left: 13px;
`;

export default function TodaySidebar() {
  const router = useRouter();
  const [basketItems, setBasketItems] = useState([]);
  const Today = getDate(new Date()).slice(0, 10);

  // const OnError = (event) => {
  //   event.target.src = "/movin.png";
  // };

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
