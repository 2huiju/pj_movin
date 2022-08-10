import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";

const Wrapper = styled.div`
  width: 200px;
  position: fixed;
  left: 10px;
  top: 600px;
  border: 1px solid #bdbdbd;
  text-align: center;
  padding: 10px;
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const MyColumn = styled.div`
  width: 160px;
  height: 200px;
  text-align: center;
  border: 1px solid #bdbdbd;
  margin-top: 10px;
`;

const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const Image = styled.img`
  width: 90%;
  height: 120px;
  padding: 10px;
`;

export default function LayoutSidebar() {
  const [basketItems, setBasketItems] = useState([]);
  const Today = getDate(new Date()).slice(0, 10);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <Wrapper>
      <Title>오늘 본 상품</Title>
      {basketItems.map((el: any) => {
        if (Today === el.date) {
          return (
            <MyRow key={el._id}>
              <MyColumn>
                {el.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <Image
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
                <div>{el.name}</div>
                <div>{el.remarks}</div>
                <div>{el.price}원</div>
              </MyColumn>
            </MyRow>
          );
        }
      })}
    </Wrapper>
  );
}
