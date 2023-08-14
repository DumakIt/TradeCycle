import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";

const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

interface IUpdateUsedItemQuestionArgs {
  useditemId: string;
  useditemQuestionId: string;
  reset: UseFormReset<{
    UpdateComment: string;
    contents: string;
  }>;
  setIsActive: Dispatch<SetStateAction<string>>;
}

interface IuseMutationUpdateUsedItemQuestion {
  updateUsedItemQuestion: (
    args: IUpdateUsedItemQuestionArgs
  ) => (data: { UpdateComment: string; contents: string }) => void;
}

export const useMutationUpdateUsedItemQuestion =
  (): IuseMutationUpdateUsedItemQuestion => {
    const [mutation] = useMutation<
      Pick<IMutation, "updateUseditemQuestion">,
      IMutationUpdateUseditemQuestionArgs
    >(UPDATE_USED_ITEM_QUESTION);

    const updateUsedItemQuestion =
      (args: IUpdateUsedItemQuestionArgs) =>
      async (data: { UpdateComment: string; contents: string }) => {
        try {
          await mutation({
            variables: {
              updateUseditemQuestionInput: { contents: data.UpdateComment },
              useditemQuestionId: args.useditemQuestionId,
            },
            refetchQueries: [
              {
                query: FETCH_USED_ITEM_QUESTIONS,
                variables: {
                  useditemId: args.useditemId,
                },
              },
            ],
          });
          args.reset({ UpdateComment: "" });
          args.setIsActive("");
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
    return { updateUsedItemQuestion };
  };
