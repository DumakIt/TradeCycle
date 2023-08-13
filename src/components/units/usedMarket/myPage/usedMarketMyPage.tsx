import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../../commons/stores";
import { useSetIsActive } from "../../../commons/hooks/custom/useSetIsActive";
import MyPageAside from "./aside/myPageAside";
import MyPageBody from "./body/myPageBody";
import * as S from "./usedMarketMyPageStyles";

export default function UsedMarketMyPage(): JSX.Element {
  const [loggedInUser] = useRecoilState(loggedInUserState);
  const [onClickIsActive, isActive] = useSetIsActive("myItemList");

  return (
    <S.Container>
      <MyPageAside
        loggedInUser={loggedInUser}
        onClickIsActive={onClickIsActive}
        isActive={isActive}
      />
      <S.Line></S.Line>
      <MyPageBody />
    </S.Container>
  );
}
