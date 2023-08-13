import { MouseEvent } from "react";
import { IUser } from "../../../../../commons/types/generated/types";
import * as S from "./myPageAsideStyles";

interface IMyPageAsideProps {
  loggedInUser: Partial<IUser>;
  isActive: string;
  onClickIsActive: (event: MouseEvent<HTMLParagraphElement>) => void;
}

export default function MyPageAside(props: IMyPageAsideProps): JSX.Element {
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
          id="myItemList"
          onClick={props.onClickIsActive}
          select={props.isActive === "myItemList"}
        >
          내 상품
        </S.Tab>
        <S.Tab
          id="buyList"
          onClick={props.onClickIsActive}
          select={props.isActive === "buyList"}
        >
          구매 내역
        </S.Tab>
      </div>
    </S.Container>
  );
}
