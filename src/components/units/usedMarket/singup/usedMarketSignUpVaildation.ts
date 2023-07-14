import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .required("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .email("이메일 아이디를 @까지 정확하게 입력해주세요."),
  password: yup
    .string()
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호를 한번 더 입력해주세요")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다"),

  name: yup
    .string()
    .required("이름을 입력해 주세요")
    .max(8, "닉네임은 최대 8글자까지 가능합니다."),
});
