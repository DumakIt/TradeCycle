import * as S from "./usedMarketLoginStyles";
import { useForm } from "react-hook-form";
import { schema } from "./usedMarketLoginVaildation";
import { yupResolver } from "@hookform/resolvers/yup";
import { wrapAsync } from "../../../commons/utility/asyncFunc";
import { IMutationLoginUserArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../../../commons/hooks/custom/useRouterMovePage";
import { useMutationLoginUser } from "../../../commons/hooks/mutation/useMutationLoginUser";

export default function UsedMarketLogin(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const { loginUser } = useMutationLoginUser();
  const { register, handleSubmit, formState } = useForm<IMutationLoginUserArgs>(
    {
      resolver: yupResolver(schema),
      mode: "onChange",
    }
  );

  return (
    <S.Container>
      <div>
        <S.LoginTitle>
          로그인<span>Login</span>
        </S.LoginTitle>
        <S.Line></S.Line>
        <form onSubmit={wrapAsync(handleSubmit(loginUser))}>
          <S.EmailWrapper>
            <S.EmailPasswordInput
              data-testid="input-email"
              type="text"
              placeholder="아이디"
              {...register("email")}
            />
            <S.inValidInput>{formState.errors.email?.message}</S.inValidInput>
          </S.EmailWrapper>
          <S.PasswordWrapper>
            <S.EmailPasswordInput
              data-testid="input-password"
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
            <S.inValidInput>
              {formState.errors.password?.message}
            </S.inValidInput>
          </S.PasswordWrapper>
          <S.LoginBtn data-testid="btn-login">로그인</S.LoginBtn>
        </form>
        <S.RegWrapper>
          아직 계정이 없으신가요?{" "}
          <span onClick={onClickMovePage("/signUp")}>회원가입</span>
        </S.RegWrapper>
      </div>
    </S.Container>
  );
}
