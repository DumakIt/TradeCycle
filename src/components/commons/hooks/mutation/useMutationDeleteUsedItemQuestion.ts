import { gql, useMutation } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

interface IUseMutationDeleteUsedItemQuestion {
  deleteUsedItemQuestion: (args: {
    useditemQuestionId: string;
    useditemId: string;
  }) => () => void;
}

export const useMutationDeleteUsedItemQuestion =
  (): IUseMutationDeleteUsedItemQuestion => {
    const [mutation] = useMutation<
      Pick<IMutation, "deleteUseditemQuestion">,
      IMutationDeleteUseditemQuestionArgs
    >(DELETE_USED_ITEM_QUESTION);

    const deleteUsedItemQuestion =
      (args: { useditemQuestionId: string; useditemId: string }) =>
      async () => {
        try {
          await mutation({
            variables: {
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
        } catch (error) {
          if (error instanceof Error) {
            Modal.error({
              title: error.message,
              content: "확인 후 다시 시도해주세요.",
            });
          }
        }
      };
    return { deleteUsedItemQuestion };
  };
