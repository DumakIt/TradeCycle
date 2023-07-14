import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { FETCH_USED_ITEM } from "../query/useQueryFetchUsedItem";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

interface IUseMutationUpdateUsedItem {
  updateUsedItem: (
    id: string
  ) => (updateUseditemInput: IUpdateUseditemInput) => Promise<void>;
}

export const useMutationUpdateUsedItem = (): IUseMutationUpdateUsedItem => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const updateUsedItem =
    (id: string) => async (updateUseditemInput: IUpdateUseditemInput) => {
      try {
        await mutation({
          variables: {
            useditemId: id,
            updateUseditemInput: {
              ...updateUseditemInput,
              remarks: "",
            },
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM,
              variables: {
                useditemId: id,
              },
            },
          ],
        });

        routerMovePage(`/${id}`);
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
  return { updateUsedItem };
};
