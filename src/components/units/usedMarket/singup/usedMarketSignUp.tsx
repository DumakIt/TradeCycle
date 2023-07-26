import * as S from "./usedMarketSignUpStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./usedMarketSignUpVaildation";
import { useRouterMovePage } from "../../../commons/hooks/custom/useRouterMovePage";
import { useMutationCreateUser } from "../../../commons/hooks/mutation/useMutationCreateUser";
import { wrapAsync } from "../../../commons/utility/asyncFunc";

export default function UsedMarketSignUp(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const { createUser } = useMutationCreateUser();
  const { register, handleSubmit, formState } = useForm<{
    email: string;
    password: string;
    passwordCheck: string;
    name: string;
  }>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <S.Container>
      <div>
        <S.SignUpTitle>
          회원가입<span>Sign up</span>
        </S.SignUpTitle>
        <S.Line></S.Line>
        <form onSubmit={wrapAsync(handleSubmit(createUser))}>
          <S.InputsWrapper>
            <S.InputsBox>
              <S.InputsTitle>아이디</S.InputsTitle>
              <S.Inputs
                data-testid="input-email"
                type="text"
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요."
                {...register("email")}
              />
            </S.InputsBox>
            <S.inValidInputs>{formState.errors.email?.message}</S.inValidInputs>
          </S.InputsWrapper>
          <S.InputsWrapper>
            <S.InputsBox>
              <S.InputsTitle>비밀번호</S.InputsTitle>
              <S.Inputs
                data-testid="input-password"
                type="password"
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...register("password")}
              />
            </S.InputsBox>
            <S.inValidInputs>
              {formState.errors.password?.message}
            </S.inValidInputs>
          </S.InputsWrapper>
          <S.InputsWrapper>
            <S.InputsBox>
              <S.InputsTitle>비밀번호 확인</S.InputsTitle>
              <S.Inputs
                data-testid="input-passwordCheck"
                type="password"
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...register("passwordCheck")}
              />
            </S.InputsBox>
            <S.inValidInputs>
              {formState.errors.passwordCheck?.message}
            </S.inValidInputs>
          </S.InputsWrapper>
          <S.InputsWrapper>
            <S.InputsBox>
              <S.InputsTitle>닉네임</S.InputsTitle>
              <S.Inputs
                data-testid="input-name"
                type="text"
                placeholder="Ex) 홍길동"
                {...register("name")}
              />
            </S.InputsBox>
            <S.inValidInputs>{formState.errors.name?.message}</S.inValidInputs>
          </S.InputsWrapper>
          <S.SignUpBtn data-testid="btn-signUp">회원가입하기</S.SignUpBtn>
        </form>
        <S.LoginWrapper>
          이미 아이디가 있으신가요?{" "}
          <span data-testid="btn-login" onClick={onClickMovePage("/login")}>
            로그인
          </span>
        </S.LoginWrapper>
      </div>
    </S.Container>
  );
}
