import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;

interface IcreateUserData {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
}

interface IUseMutationCreateUser {
  createUser: (data: IcreateUserData) => Promise<void>;
}

export const useMutationCreateUser = (): IUseMutationCreateUser => {
  const [mutation] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const { routerMovePage } = useRouterMovePage();

  const createUser = async (data: IcreateUserData): Promise<void> => {
    try {
      const result = await mutation({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });

      Modal.success({
        content: `${
          result.data?.createUser?.name ?? ""
        }님 회원이 되신걸 환영합니다~`,
        onOk() {
          routerMovePage("/login");
        },
        okButtonProps: {
          style: { backgroundColor: "black", color: "white" },
        },
      });
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
  return { createUser };
};
