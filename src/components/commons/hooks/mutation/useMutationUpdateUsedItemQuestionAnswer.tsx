import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../query/useQueryFetchUsedItemQuestionAnswers";

const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;

interface IUpdateUseditemQuestionAnswerArgs {
  id: string;
  useditemQuestionId: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  reset: UseFormReset<{
    UpdateReply: string;
  }>;
}

interface IUseMutationUpdateUsedItemQuestionAnswer {
  updateUseditemQuestionAnswer: (
    args: IUpdateUseditemQuestionAnswerArgs
  ) => (data: { UpdateReply: string }) => void;
}

export const useMutationUpdateUsedItemQuestionAnswer =
  (): IUseMutationUpdateUsedItemQuestionAnswer => {
    const [mutation] = useMutation<
      Pick<IMutation, "updateUseditemQuestionAnswer">,
      IMutationUpdateUseditemQuestionAnswerArgs
    >(UPDATE_USED_ITEM_QUESTION_ANSWER);

    const updateUseditemQuestionAnswer =
      (args: IUpdateUseditemQuestionAnswerArgs) =>
      async (data: { UpdateReply: string }) => {
        try {
          await mutation({
            variables: {
              updateUseditemQuestionAnswerInput: { contents: data.UpdateReply },
              useditemQuestionAnswerId: args.id,
            },
            refetchQueries: [
              {
                query: FETCH_USED_ITEM_QUESTION_ANSWERS,
                variables: {
                  useditemQuestionId: args.useditemQuestionId,
                },
              },
            ],
          });
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
    return { updateUseditemQuestionAnswer };
  };
