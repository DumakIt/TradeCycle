import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import PointChargeModal from "../../../../commons/modal/pointChargeModal/pointChargeModal";
import * as S from "./myPageAsideStyles";
import { IProps } from "./myPageAsideTypes";

export default function MyPageAside(props: IProps): JSX.Element {
  const [isOpen, changeIsOpen] = useSetIsToggle();

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImgBox>
          {props.loggedInUser.picture ? (
            <img
              src={`https:/storage.googleapis.com/${props.loggedInUser.picture}`}
            />
          ) : (
            <S.UserDefaultIcon />
          )}
        </S.ProfileImgBox>
        <p>{props.loggedInUser.name}님</p>
      </S.ProfileWrapper>
      <hr />
      <div>
        <S.Tab
          data-testid="btn-myItemList"
          id="myItemList"
          onClick={props.onClickIsActive}
          select={props.isActive === "myItemList"}
        >
          내 상품
        </S.Tab>
        <S.Tab
          data-testid="btn-buyList"
          id="buyList"
          onClick={props.onClickIsActive}
          select={props.isActive === "buyList"}
        >
          구매 내역
        </S.Tab>
        <S.Tab onClick={changeIsOpen}>포인트 충전</S.Tab>
        <PointChargeModal
          isOpen={isOpen}
          data={props.loggedInUser}
          changeIsOpen={changeIsOpen}
        />
      </div>
    </S.Container>
  );
}
