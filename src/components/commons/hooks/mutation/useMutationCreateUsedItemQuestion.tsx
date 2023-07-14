import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { UseFormReset } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

interface ICreateUsedItemQuestionArgs {
  id: string;
  reset: UseFormReset<{ UpdateComment: string; contents: string }>;
}

interface IUseMutationCreateUsedItemQuestion {
  createUsedItemQuestion: (
    args: ICreateUsedItemQuestionArgs
  ) => (data: { UpdateComment: string; contents: string }) => void;
}

export const useMutationCreateUsedItemQuestion =
  (): IUseMutationCreateUsedItemQuestion => {
    const [mutation] = useMutation<
      Pick<IMutation, "createUseditemQuestion">,
      IMutationCreateUseditemQuestionArgs
    >(CREATE_USED_ITEM_QUESTION);

    const createUsedItemQuestion =
      (args: ICreateUsedItemQuestionArgs) =>
      async (data: { UpdateComment: string; contents: string }) => {
        try {
          if (data.contents.trim().length === 0) return;
          await mutation({
            variables: {
              createUseditemQuestionInput: { contents: data.contents },
              useditemId: args.id,
            },
            refetchQueries: [
              {
                query: FETCH_USED_ITEM_QUESTIONS,
                variables: {
                  useditemId: args.id,
                },
              },
            ],
          });
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
    return { createUsedItemQuestion };
  };
