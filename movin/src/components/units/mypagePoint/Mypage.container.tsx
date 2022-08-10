import { useQuery } from "@apollo/client";
import * as S from "./Mypage.styles";

import { useState } from "react";
import { getDate } from "../../../commons/libraries/utils";
import {
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTION_OF_BUYING,
  FETCH_POINT_TRANSACTION_OF_SELLING,
} from "./Mypage.queries";

export default function MyPagePointContainer(props) {
  const [isPoint, setIsPoint] = useState("TotalPoint");

  const { data: LoadingPoint } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  const { data: BuyingPoint } = useQuery(FETCH_POINT_TRANSACTION_OF_BUYING);
  const { data: SellingPoint } = useQuery(FETCH_POINT_TRANSACTION_OF_SELLING);

  console.log(BuyingPoint);
  console.log(
    String(BuyingPoint?.fetchPointTransactionsOfBuying[0]?.amount).includes("-")
  );

  const onClickFetchPoint = () => {
    setIsPoint("TotalPoint");
  };

  const onClickFetchPoint2 = () => {
    setIsPoint("LoadingPoint");
  };

  const onClickFetchPoint3 = () => {
    setIsPoint("BuyingPoint");
  };

  const onClickFetchPoint4 = () => {
    setIsPoint("SellingPoint");
  };

  return (
    <>
      <S.Wrapper>
        <S.ButtonWrapper>
          <S.FetchButton onClick={onClickFetchPoint}>전체내역</S.FetchButton>
          <S.FetchButton onClick={onClickFetchPoint2}>충전내역</S.FetchButton>
          <S.FetchButton onClick={onClickFetchPoint3}>구매내역</S.FetchButton>
          <S.FetchButton onClick={onClickFetchPoint4}>판매내역</S.FetchButton>
        </S.ButtonWrapper>
        {isPoint === "TotalPoint" && (
          <S.ListTitleRow>
            <S.NumberRow>날짜</S.NumberRow>
            <S.TitleRow>내용</S.TitleRow>
            <S.WriterRow>거래 및 충전내역</S.WriterRow>
            <S.AtRow>잔액</S.AtRow>
          </S.ListTitleRow>
        )}
        {isPoint === "TotalPoint" &&
          props.PointData?.fetchPointTransactions
            .slice(0, 10)
            .map((el: any, index: any) => (
              <S.ListWrapper key={el._id}>
                <S.ListRow>
                  <S.IndexColumn>{getDate(el.createdAt)}</S.IndexColumn>
                  <S.TitleColumn>{el.status}</S.TitleColumn>
                  {String(el.amount).includes("-") ? (
                    <S.WriterColumn>
                      {el.amount.toLocaleString("ko-KR")}
                    </S.WriterColumn>
                  ) : (
                    <S.WriterColumn>
                      +{el.amount.toLocaleString("ko-KR")}
                    </S.WriterColumn>
                  )}
                  <S.AtColumn>
                    {el.balance.toLocaleString("ko-KR")}원
                  </S.AtColumn>
                </S.ListRow>
              </S.ListWrapper>
            ))}
        {isPoint === "LoadingPoint" && (
          <S.ListTitleRow>
            <S.NumberRow>충전일</S.NumberRow>
            <S.TitleRow>결제 ID</S.TitleRow>
            <S.WriterRow>충전내역</S.WriterRow>
            <S.AtRow>충전 후 잔액</S.AtRow>
          </S.ListTitleRow>
        )}
        {isPoint === "LoadingPoint" &&
          LoadingPoint?.fetchPointTransactionsOfLoading
            .slice(0, 10)
            .map((el: any, index: any) => (
              <S.ListWrapper key={el._id}>
                <S.ListRow>
                  <S.IndexColumn>{getDate(el.createdAt)}</S.IndexColumn>
                  <S.TitleColumn>{el.impUid}</S.TitleColumn>
                  <S.WriterColumn>
                    +{el.amount.toLocaleString("ko-KR")}
                  </S.WriterColumn>
                  <S.AtColumn>
                    {el.balance.toLocaleString("ko-KR")}원
                  </S.AtColumn>
                </S.ListRow>
              </S.ListWrapper>
            ))}
        {isPoint === "BuyingPoint" && (
          <S.ListTitleRow>
            <S.NumberRow>거래일</S.NumberRow>
            <S.TitleRow>상품명</S.TitleRow>
            <S.WriterRow>거래내역</S.WriterRow>
            <S.AtRow>거래 후 잔액</S.AtRow>
          </S.ListTitleRow>
        )}
        {isPoint === "BuyingPoint" &&
          BuyingPoint?.fetchPointTransactionsOfBuying
            .slice(0, 10)
            .map((el: any, index: any) => (
              <S.ListWrapper key={el._id}>
                <S.ListRow>
                  <S.IndexColumn>{getDate(el.createdAt)}</S.IndexColumn>
                  <S.TitleColumn>{el.useditem.name}</S.TitleColumn>
                  <S.WriterColumn>
                    {el.amount.toLocaleString("ko-KR")}
                  </S.WriterColumn>
                  <S.AtColumn>
                    {el.balance.toLocaleString("ko-KR")}원
                  </S.AtColumn>
                </S.ListRow>
              </S.ListWrapper>
            ))}
        {isPoint === "SellingPoint" && (
          <S.ListTitleRow>
            <S.NumberRow>거래일</S.NumberRow>
            <S.TitleRow>상품명</S.TitleRow>
            <S.WriterRow>거래내역</S.WriterRow>
            <S.AtRow>거래 후 잔액</S.AtRow>
          </S.ListTitleRow>
        )}
        {isPoint === "SellingPoint" &&
          SellingPoint?.fetchPointTransactionsOfSelling
            .slice(0, 10)
            .map((el: any, index: any) => (
              <S.ListWrapper key={el._id}>
                <S.ListRow>
                  <S.IndexColumn>{getDate(el.createdAt)}</S.IndexColumn>
                  <S.TitleColumn>{el.useditem.name}</S.TitleColumn>
                  <S.WriterColumn>
                    +{el.amount.toLocaleString("ko-KR")}
                  </S.WriterColumn>
                  <S.AtColumn>
                    {el.balance.toLocaleString("ko-KR")}원
                  </S.AtColumn>
                </S.ListRow>
              </S.ListWrapper>
            ))}
      </S.Wrapper>
    </>
  );
}
