import { useMutation } from "@apollo/client";
import { useState } from "react";
import PaymentPresenter from "./payment.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./payment.queries";
import { IPaymentContainerProps } from "./payment.types";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentContainer(props: IPaymentContainerProps) {
  const [money, setMoney] = useState(0);
  const [isSelect, setIsSelect] = useState(false);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const Price = [1000, 2000, 5000, 10000];

  const onChangeMoney = (event: any) => {
    setMoney(event?.target.value);
  };

  const onClickMoney = (event: IPaymentContainerProps) => {
    setMoney(event?.target.value);
    setIsSelect((prev) => !prev);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
    setIsSelect(false);
    setMoney(0);
  };

  const SelectOption = () => {
    setIsSelect((prev) => !prev);
  };

  const requestPay = () => {
    props.setIsModalVisible(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); //

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: money,
        buyer_email: props.data?.fetchUserLoggedIn.email,
        buyer_name: props.data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 구로구 구로동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            console.log(result);
            alert("충전완료");
          } catch (error) {
            console.log(error);
          }
        } else {
          alert("결제 실패");
        }
      }
    );
  };
  return (
    <PaymentPresenter
      isSelect={isSelect}
      money={money}
      Price={Price}
      onChangeMoney={onChangeMoney}
      onClickMoney={onClickMoney}
      handleCancel={handleCancel}
      SelectOption={SelectOption}
      requestPay={requestPay}
    />
  );
}
