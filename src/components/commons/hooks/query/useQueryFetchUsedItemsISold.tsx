import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query {
    fetchUseditemsISold {
      _id
      name
      price
      createdAt
    }
  }
`;

export const useQueryFetchUsedItemsISold = (): typeof data => {
  const data = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USED_ITEMS_I_SOLD);

  return data;
};
