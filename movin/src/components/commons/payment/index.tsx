import PaymentContainer from "../../units/payment/payment.container";

export default function PaymentPage(props: any) {
  return (
    <PaymentContainer
      data={props.data}
      setIsModalVisible={props.setIsModalVisible}
    />
  );
}
