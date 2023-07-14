import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../query/useQueryFetchUserLoggedIn";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

interface IUseMutationCreatePointTransactionOfLoading {
  createPointTransactionOfLoading: (variables: {
    impUid: string;
  }) => Promise<void>;
}

export const useMutationCreatePointTransactionOfLoading =
  (): IUseMutationCreatePointTransactionOfLoading => {
    const [mutation] = useMutation<
      Pick<IMutation, "createPointTransactionOfLoading">,
      IMutationCreatePointTransactionOfLoadingArgs
    >(CREATE_POINT_TRANSACTION_OF_LOADING);

    const createPointTransactionOfLoading = async (variables: {
      impUid: string;
    }): Promise<void> => {
      try {
        await mutation({
          variables,
          refetchQueries: [
            {
              query: FETCH_USER_LOGGED_IN,
            },
          ],
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

    return { createPointTransactionOfLoading };
  };
