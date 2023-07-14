import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  ICreateUseditemInput,
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      tags
      useditemAddress {
        lat
        lng
      }
    }
  }
`;

interface IUseMutationCreateUsedItem {
  createUsedItem: (createUseditemInput: ICreateUseditemInput) => Promise<void>;
}

export const useMutationCreateUsedItem = (): IUseMutationCreateUsedItem => {
  const { routerMovePage } = useRouterMovePage();
  const [mutation] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const createUsedItem = async (
    createUseditemInput: ICreateUseditemInput
  ): Promise<void> => {
    try {
      const result = await mutation({
        variables: {
          createUseditemInput: {
            ...createUseditemInput,
            remarks: "",
          },
        },
      });
      routerMovePage(`/${result.data?.createUseditem._id ?? ""}`);
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
  return { createUsedItem };
};
