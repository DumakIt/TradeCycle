import { gql, useMutation } from "@apollo/client";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { Modal } from "antd";
import { FETCH_USED_ITEMS } from "../query/useQueryFetchUseditems";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

interface IUseMutationDeleteUsedItem {
  deleteUsedItem: (
    variables: IMutationDeleteUseditemArgs
  ) => () => Promise<void>;
}

export const useMutationDeleteUsedItem = (): IUseMutationDeleteUsedItem => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const deleteUsedItem =
    (variables: IMutationDeleteUseditemArgs) => async (): Promise<void> => {
      try {
        await mutation({
          variables,
          refetchQueries: [{ query: FETCH_USED_ITEMS }],
        });
        routerMovePage(`/`);
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

  return { deleteUsedItem };
};
