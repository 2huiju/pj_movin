import { useQuery } from "@apollo/client";

import { SetStateAction, useState } from "react";
import {
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTION_OF_BUYING,
  FETCH_POINT_TRANSACTION_OF_SELLING,
} from "./MypagePoint.queries";
import MyPagePresenter from "./MypagePoint.presenter";
import { IMyPagePointContainerProps } from "./MypagePoint.types";

export default function MyPagePointContainer(
  props: IMyPagePointContainerProps
) {
  const [isPoint, setIsPoint] = useState("TotalPoint");
  const [activeMenu, setActiveMenu] = useState("전체내역");

  const { data: LoadingPoint } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  const { data: BuyingPoint } = useQuery(FETCH_POINT_TRANSACTION_OF_BUYING);
  const { data: SellingPoint } = useQuery(FETCH_POINT_TRANSACTION_OF_SELLING);

  const Menu = [
    { name: "전체내역", pointName: "TotalPoint" },
    { name: "충전내역", pointName: "LoadingPoint" },
    { name: "구매내역", pointName: "BuyingPoint" },
    { name: "판매내역", pointName: "SellingPoint" },
  ];

  const onClickMenu =
    (el: { name: SetStateAction<string>; pointName: SetStateAction<string> }) =>
    () => {
      setActiveMenu(el.name);
      setIsPoint(el.pointName);
    };

  return (
    <MyPagePresenter
      isPoint={isPoint}
      LoadingPoint={LoadingPoint}
      BuyingPoint={BuyingPoint}
      SellingPoint={SellingPoint}
      PointData={props.PointData}
      Menu={Menu}
      onClickMenu={onClickMenu}
      activeMenu={activeMenu}
    />
  );
}
