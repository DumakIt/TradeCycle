import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

interface IUseMutationLoginUser {
  loginUser: (variables: IMutationLoginUserArgs) => Promise<void>;
}

export const useMutationLoginUser = (): IUseMutationLoginUser => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [mutation] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { routerMovePage } = useRouterMovePage();

  const loginUser = async (
    variables: IMutationLoginUserArgs
  ): Promise<void> => {
    try {
      const result = await mutation({ variables });

      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined)
        Modal.error({
          title: "오류가 발생했습니다",
          content: "잠시후 다시 시도해 주세요.",
        });
      setAccessToken(accessToken);
      routerMovePage("/");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: "확인후 다시 시도해 주세요",
          okButtonProps: {
            style: { backgroundColor: "black", color: "white" },
          },
        });
    }
  };

  return { loginUser };
};
