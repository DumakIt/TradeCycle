import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

interface IUseMutationLogoutUser {
  logoutUser: () => Promise<void>;
}

export const useMutationLogoutUser = (): IUseMutationLogoutUser => {
  const [mutation] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const logoutUser = async (): Promise<void> => {
    await mutation();
    window.location.reload();
  };

  return { logoutUser };
};
