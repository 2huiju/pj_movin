import { FormEventHandler, MouseEventHandler, ReactNode } from "react";

export interface IPaymentContainerProps {
  data: any;
  setIsModalVisible: any;
  target: any;
}

export interface IPaymentPresenterProps {
  requestPay: MouseEventHandler<HTMLDivElement> | undefined;
  onClickMoney: any;
  Price: any;
  isSelect: any;
  money: ReactNode;
  SelectOption: MouseEventHandler<HTMLDivElement> | undefined;
  onChangeMoney: FormEventHandler<HTMLDivElement> | undefined;
  handleCancel: MouseEventHandler<HTMLDivElement> | undefined;
}
