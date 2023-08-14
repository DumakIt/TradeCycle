import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      contents
      price
      images
      seller {
        _id
        name
        picture
      }
      useditemAddress {
        lat
        lng
      }
    }
  }
`;

export const useQueryFetchUsedItem = (
  variables: IQueryFetchUseditemArgs
): typeof data => {
  const data = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USED_ITEM,
    { variables }
  );

  return data;
};
