import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import {
  ICreateUseditemQuestionAnswerInput,
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../query/useQueryFetchUsedItemQuestionAnswers";

const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

interface IcreateUsedItemQuestionAnswerArgs {
  id: string;
  reset: UseFormReset<ICreateUseditemQuestionAnswerInput>;
  setIsActive: Dispatch<SetStateAction<string>>;
}

interface IUseMutationCreateUsedItemQuestionAnswer {
  createUsedItemQuestionAnswer: (
    args: IcreateUsedItemQuestionAnswerArgs
  ) => (createUseditemQuestionAnswerInput: {
    contents: string;
  }) => Promise<void>;
}

export const useMutationCreateUsedItemQuestionAnswer =
  (): IUseMutationCreateUsedItemQuestionAnswer => {
    const [mutation] = useMutation<
      Pick<IMutation, "createUseditemQuestionAnswer">,
      IMutationCreateUseditemQuestionAnswerArgs
    >(CREATE_USED_ITEM_QUESTION_ANSWER);

    const createUsedItemQuestionAnswer =
      (args: IcreateUsedItemQuestionAnswerArgs) =>
      async (createUseditemQuestionAnswerInput: { contents: string }) => {
        try {
          await mutation({
            variables: {
              createUseditemQuestionAnswerInput,
              useditemQuestionId: args.id,
            },
            refetchQueries: [
              {
                query: FETCH_USED_ITEM_QUESTION_ANSWERS,
                variables: {
                  useditemQuestionId: args.id,
                },
              },
            ],
          });
          args.setIsActive("");
          args.reset();
        } catch (error) {
          if (error instanceof Error) {
            if (error.message === "회원정보 인증에 실패하였습니다.") {
              Modal.error({
                content: "로그인후 다시 시도해 주세요",
                okButtonProps: {
                  style: { backgroundColor: "black", color: "white" },
                },
              });
            } else {
              Modal.error({
                content: "확인후 다시 시도해 주세요",
                okButtonProps: {
                  style: { backgroundColor: "black", color: "white" },
                },
              });
            }
          }
        }
      };
    return { createUsedItemQuestionAnswer };
  };
