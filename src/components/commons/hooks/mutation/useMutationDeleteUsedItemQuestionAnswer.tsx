import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../query/useQueryFetchUsedItemQuestionAnswers";

const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

interface IDeleteUsedItemQuestionAnswerArgs {
  useditemQuestionId: string;
  useditemQuestionAnswerId: string;
}

interface IUseMutationDeleteUsedItemQuestionAnswer {
  deleteUsedItemQuestionAnswer: (
    args: IDeleteUsedItemQuestionAnswerArgs
  ) => () => void;
}

export const useMutationDeleteUsedItemQuestionAnswer =
  (): IUseMutationDeleteUsedItemQuestionAnswer => {
    const [mutation] = useMutation<
      Pick<IMutation, "deleteUseditemQuestionAnswer">,
      IMutationDeleteUseditemQuestionAnswerArgs
    >(DELETE_USED_ITEM_QUESTION_ANSWER);

    const deleteUsedItemQuestionAnswer =
      (args: IDeleteUsedItemQuestionAnswerArgs) => async () => {
        try {
          await mutation({
            variables: {
              useditemQuestionAnswerId: args.useditemQuestionAnswerId,
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
    return { deleteUsedItemQuestionAnswer };
  };
