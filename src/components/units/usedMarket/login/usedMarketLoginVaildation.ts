import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("이메일 아이디를 @까지 정확하게 입력해주세요.").email("이메일 아이디를 @까지 정확하게 입력해주세요."),
  password: yup
    .string()
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/, "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
});
