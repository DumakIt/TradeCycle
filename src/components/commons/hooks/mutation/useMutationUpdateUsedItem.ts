import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";
import { FETCH_USED_ITEM } from "../query/useQueryFetchUsedItem";
import { UseMutationUploadFile } from "./useMutationUploadFile";

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
    id: string,
    images: Record<string, string>
  ) => (updateUseditemInput: IUpdateUseditemInput) => Promise<void>;
}

export const useMutationUpdateUsedItem = (): IUseMutationUpdateUsedItem => {
  const { routerMovePage } = useRouterMovePage();
  const { uploadFile } = UseMutationUploadFile();
  const [mutation] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const updateUsedItem =
    (id: string, images: Record<string, string>) =>
    async (updateUseditemInput: IUpdateUseditemInput): Promise<void> => {
      try {
        const resultImages = await uploadFile(images);
        await mutation({
          variables: {
            useditemId: id,
            updateUseditemInput: {
              ...updateUseditemInput,
              images: resultImages,
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
