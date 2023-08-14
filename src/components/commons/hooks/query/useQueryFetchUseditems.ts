import { ApolloQueryResult, gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../../../../commons/stores";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      createdAt
      price
      images
      tags
    }
  }
`;

interface IuseQueryFetchUsedItems {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  FetchMore: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
}

export const useQueryFetchUsedItems = (): IuseQueryFetchUsedItems => {
  const [search] = useRecoilState(searchState);
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  useEffect(() => {
    void refetch({
      search,
    });
  }, [search]);

  const FetchMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          fetchMoreResult.fetchUseditems === undefined ||
          fetchMoreResult.fetchUseditems.length === 0
        )
          return { fetchUseditems: prev.fetchUseditems ?? [] };

        return {
          fetchUseditems: [
            ...(prev.fetchUseditems ?? []),
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return { data, FetchMore, refetch };
};
