import { Modal } from "antd";
import Script from "next/script";
import { MouseEvent, useState } from "react";
import { IUser } from "../../../../commons/types/generated/types";
import { useChargePoints } from "../../hooks/custom/useChargePoints";
import { useSetIsToggle } from "../../hooks/custom/useSetIsToggle";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pointChargeModalStyles";

interface IPointChargeModal {
  isOpen: boolean;
  data: IUser;
  changeIsOpen: () => void;
}

export default function PointChargeModal(
  props: IPointChargeModal
): JSX.Element {
  const [isSelete, changeIsSelete, setIsSelete] = useSetIsToggle();
  const [amount, setAmount] = useState("");
  const { onClickCharge } = useChargePoints();

  const onClickPoint = (event: MouseEvent<HTMLDivElement>): void => {
    setAmount(event.currentTarget.id);
    changeIsSelete();
  };

  const onClickCancel = (): void => {
    props.changeIsOpen();
    setAmount("");
    setIsSelete(false);
  };

  return (
    <div>
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" />
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      {props.isOpen && (
        <Modal
          open={true}
          onCancel={onClickCancel}
          footer={null}
          width={464}
          closeIcon={<S.CloseIcon />}
          centered
        >
          <S.ChargePointTitle>충전하실 금액을 선택해주세요!</S.ChargePointTitle>
          <S.SelectPointBtnWrapper onClick={changeIsSelete}>
            <S.SelectedPoint amount={amount}>
              {amount !== "" ? amount : "포인트 선택"}
            </S.SelectedPoint>
            {isSelete ? <S.UpIcon /> : <S.DownIcon />}
          </S.SelectPointBtnWrapper>

          {isSelete && (
            <S.SelectBoxContainer>
              {[5000, 10000, 50000, 100000].map((el) => (
                <S.PointList
                  key={uuidv4()}
                  id={String(el)}
                  onClick={onClickPoint}
                >
                  {el.toLocaleString()}
                </S.PointList>
              ))}
            </S.SelectBoxContainer>
          )}
          <S.ChargeBtn
            amount={amount}
            disabled={amount === ""}
            onClick={onClickCharge({ onClickCancel, amount, data: props.data })}
          >
            충전하기
          </S.ChargeBtn>
        </Modal>
      )}
    </div>
  );
}
