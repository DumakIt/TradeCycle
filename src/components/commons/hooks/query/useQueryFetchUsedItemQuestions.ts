import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      user {
        name
        _id
      }
      createdAt
    }
  }
`;

interface IUseQueryFetchUsedItemQuestions {
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  FetchMore: () => Promise<void>;
}

export const useQueryFetchUsedItemQuestions = (
  variables: IQueryFetchUseditemQuestionsArgs
): IUseQueryFetchUsedItemQuestions => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, { variables });

  const FetchMore = async (): Promise<void> => {
    if (data === undefined) return;
    await fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestions === undefined) return prev;
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return { data, FetchMore };
};
