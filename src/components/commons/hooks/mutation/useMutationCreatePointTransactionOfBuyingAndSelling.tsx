import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { FETCH_USER_LOGGED_IN } from "../query/useQueryFetchUserLoggedIn";

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

interface ICreatePointTransactionOfBuyingAndSellingArgs {
  useritemId: string;
  loggedInUser: string | undefined;
}

interface IuseMutationCreatePointTransactionOfBuyingAndSelling {
  createPointTransactionOfBuyingAndSelling: (
    args: ICreatePointTransactionOfBuyingAndSellingArgs
  ) => () => Promise<void>;
}

export const useMutationCreatePointTransactionOfBuyingAndSelling =
  (): IuseMutationCreatePointTransactionOfBuyingAndSelling => {
    const { routerMovePage } = useRouterMovePage();
    const [mutation] = useMutation<
      Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
      IMutationCreatePointTransactionOfBuyingAndSellingArgs
    >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

    const createPointTransactionOfBuyingAndSelling =
      (args: ICreatePointTransactionOfBuyingAndSellingArgs) => async () => {
        try {
          if (args.loggedInUser !== undefined) {
            await mutation({
              variables: { useritemId: args.useritemId },
              refetchQueries: [
                {
                  query: FETCH_USER_LOGGED_IN,
                },
              ],
            });
            routerMovePage("/");
          } else {
            Modal.info({
              content: "로그인 후 이용 가능합니다",
              okButtonProps: {
                style: { backgroundColor: "black", color: "white" },
              },
            });
          }
        } catch (error) {
          if (error instanceof Error)
            Modal.error({
              title: error.message,
              content: "확인후 다시 시도해 주세요",
              okButtonProps: {
                style: { backgroundColor: "black", color: "white" },
              },
            });
        }
      };

    return { createPointTransactionOfBuyingAndSelling };
  };
