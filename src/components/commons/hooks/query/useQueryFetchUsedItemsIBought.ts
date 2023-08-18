import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought {
    fetchUseditemsIBought {
      _id
      name
      price
      soldAt
    }
  }
`;

export const useQueryFetchUsedItemsIBought = (): typeof data => {
  const data = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_I_BOUGHT);

  return data;
};
