import Head from "next/head";
import * as P from "./payment.styles";
import { IPaymentPresenterProps } from "./payment.types";
export default function PaymentPresenter(props: IPaymentPresenterProps) {
  return (
    <>
      <P.Overlay onClick={props.handleCancel} />
      <P.PayMentWrapper>
        <Head>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
        <P.CancelImg
          onClick={props.handleCancel}
          src="/delete.png"
        ></P.CancelImg>
        <P.Title>충전하실 금액을 선택해주세요</P.Title>
        <P.MoneyWrapper>
          <P.SelectBox onChange={props.onChangeMoney}>
            <P.MoneyOption onClick={props.SelectOption}>
              {props.money}
            </P.MoneyOption>
            {props.isSelect && (
              <>
                {props.Price.map((el: any) => (
                  <P.Price key={el} onClick={props.onClickMoney} value={el}>
                    {el}
                  </P.Price>
                ))}
              </>
            )}
          </P.SelectBox>
        </P.MoneyWrapper>
        <P.ChargeButton onClick={props.requestPay}>충전하기</P.ChargeButton>
      </P.PayMentWrapper>
    </>
  );
}
