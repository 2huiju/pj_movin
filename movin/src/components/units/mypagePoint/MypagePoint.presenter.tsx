import * as S from "./MypagePoint.styles";
import { getDate } from "../../../commons/libraries/utils";

export default function MyPagePresenter(props) {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        {props.Menu.map((el) => (
          <S.FetchButton
            key={el}
            el={el}
            activeMenu={props.activeMenu}
            onClick={props.onClickMenu(el)}
          >
            {el.name}
          </S.FetchButton>
        ))}
      </S.ButtonWrapper>
      {props.isPoint === "TotalPoint" && (
        <S.ListTitleRow>
          <S.NumberRow>날짜</S.NumberRow>
          <S.TitleRow>내용</S.TitleRow>
          <S.WriterRow>거래 및 충전내역</S.WriterRow>
          <S.AtRow>잔액</S.AtRow>
        </S.ListTitleRow>
      )}
      {props.isPoint === "TotalPoint" &&
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
                <S.AtColumn>{el.balance.toLocaleString("ko-KR")}원</S.AtColumn>
              </S.ListRow>
            </S.ListWrapper>
          ))}
      {props.isPoint === "LoadingPoint" && (
        <S.ListTitleRow>
          <S.NumberRow>충전일</S.NumberRow>
          <S.TitleRow>결제 ID</S.TitleRow>
          <S.WriterRow>충전내역</S.WriterRow>
          <S.AtRow>충전 후 잔액</S.AtRow>
        </S.ListTitleRow>
      )}
      {props.isPoint === "LoadingPoint" &&
        props.LoadingPoint?.fetchPointTransactionsOfLoading
          .slice(0, 10)
          .map((el: any, index: any) => (
            <S.ListWrapper key={el._id}>
              <S.ListRow>
                <S.IndexColumn>{getDate(el.createdAt)}</S.IndexColumn>
                <S.TitleColumn>{el.impUid}</S.TitleColumn>
                <S.WriterColumn>
                  +{el.amount.toLocaleString("ko-KR")}
                </S.WriterColumn>
                <S.AtColumn>{el.balance.toLocaleString("ko-KR")}원</S.AtColumn>
              </S.ListRow>
            </S.ListWrapper>
          ))}
      {props.isPoint === "BuyingPoint" && (
        <S.ListTitleRow>
          <S.NumberRow>거래일</S.NumberRow>
          <S.TitleRow>상품명</S.TitleRow>
          <S.WriterRow>거래내역</S.WriterRow>
          <S.AtRow>거래 후 잔액</S.AtRow>
        </S.ListTitleRow>
      )}
      {props.isPoint === "BuyingPoint" &&
        props.BuyingPoint?.fetchPointTransactionsOfBuying
          .slice(0, 10)
          .map((el: any, index: any) => (
            <S.ListWrapper key={el._id}>
              <S.ListRow>
                <S.IndexColumn>{getDate(el.createdAt)}</S.IndexColumn>
                <S.TitleColumn>{el.useditem.name}</S.TitleColumn>
                <S.WriterColumn>
                  {el.amount.toLocaleString("ko-KR")}
                </S.WriterColumn>
                <S.AtColumn>{el.balance.toLocaleString("ko-KR")}원</S.AtColumn>
              </S.ListRow>
            </S.ListWrapper>
          ))}
      {props.isPoint === "SellingPoint" && (
        <S.ListTitleRow>
          <S.NumberRow>거래일</S.NumberRow>
          <S.TitleRow>상품명</S.TitleRow>
          <S.WriterRow>거래내역</S.WriterRow>
          <S.AtRow>거래 후 잔액</S.AtRow>
        </S.ListTitleRow>
      )}
      {props.isPoint === "SellingPoint" &&
        props.SellingPoint?.fetchPointTransactionsOfSelling
          .slice(0, 10)
          .map((el: any, index: any) => (
            <S.ListWrapper key={el._id}>
              <S.ListRow>
                <S.IndexColumn>{getDate(el.createdAt)}</S.IndexColumn>
                <S.TitleColumn>{el.useditem.name}</S.TitleColumn>
                <S.WriterColumn>
                  +{el.amount.toLocaleString("ko-KR")}
                </S.WriterColumn>
                <S.AtColumn>{el.balance.toLocaleString("ko-KR")}원</S.AtColumn>
              </S.ListRow>
            </S.ListWrapper>
          ))}
    </S.Wrapper>
  );
}
