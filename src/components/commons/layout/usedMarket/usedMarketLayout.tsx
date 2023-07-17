import Link from "next/link";
import { useRouter } from "next/router";
import { useEffectHandleScroll } from "../../hooks/custom/useEffectHandleScroll";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import { useSearch } from "../../hooks/custom/useSearch";
import { useSetIsToggle } from "../../hooks/custom/useSetIsToggle";
import { useMutationLogoutUser } from "../../hooks/mutation/useMutationLogoutUser";
import { useQueryFetchUserLoggedIn } from "../../hooks/query/useQueryFetchUserLoggedIn";
import PointChargeModal from "../../usedMarket/pointChargeModal/pointChargeModal";
import * as S from "./usedMarketLayoutStyles";

export default function UsedMarketLayout(): JSX.Element {
  const router = useRouter();
  const isScroll = useEffectHandleScroll();
  const [isOpen, changeIsOpen] = useSetIsToggle();
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const onChangeSearch = useSearch();
  const { data } = useQueryFetchUserLoggedIn();
  const { logoutUser } = useMutationLogoutUser();
  const { onClickMovePage } = useRouterMovePage();
  return (
    <>
      <S.HeaderContainer>
        <div>
          <S.LogoWrapper onClick={onClickMovePage("/list")}>
            <img src="/images/logo.svg" />
          </S.LogoWrapper>
          {data?.fetchUserLoggedIn !== undefined ? (
            <S.UserWrapper>
              <S.UserName>
                {data.fetchUserLoggedIn.name}님 포인트{" "}
                <span>
                  {data.fetchUserLoggedIn?.userPoint?.amount.toLocaleString()}
                </span>
                <span>P</span>
              </S.UserName>
              <S.Charge onClick={changeIsOpen}>충전</S.Charge>
              <S.LogOut
                onClick={() => {
                  void logoutUser();
                }}
              >
                로그아웃
              </S.LogOut>
              <PointChargeModal
                isOpen={isOpen}
                data={data?.fetchUserLoggedIn}
                changeIsOpen={changeIsOpen}
              />
            </S.UserWrapper>
          ) : (
            <S.FuncWrapper>
              <Link href="/login">
                <S.StyledLink>LOGIN</S.StyledLink>
              </Link>
              <Link href="/signUp">
                <S.StyledLink>JOIN US</S.StyledLink>
              </Link>
            </S.FuncWrapper>
          )}
        </div>
      </S.HeaderContainer>
      {router.asPath === "/list/" && (
        <S.ScrollHeaderContainer isScroll={isScroll}>
          <div>
            <S.LogoWrapper>
              <img src="/images/logo.svg" />
            </S.LogoWrapper>
            <S.SearchBox istoggle={String(isToggle)} isScroll={isScroll}>
              <S.SearchBoxInput
                istoggle={String(isToggle)}
                type="text"
                onChange={onChangeSearch}
              />
              <S.CustomSearchOutlined
                istoggle={String(isToggle)}
                onClick={changeIsToggle}
              />
            </S.SearchBox>
          </div>
        </S.ScrollHeaderContainer>
      )}
    </>
  );
}
