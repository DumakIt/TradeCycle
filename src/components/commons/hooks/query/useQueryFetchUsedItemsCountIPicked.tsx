import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;

export const useQueryFetchUsedItemsCountIPicked = (): typeof data => {
  const data = useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(
    FETCH_USED_ITEMS_COUNT_I_PICKED
  );
  return data;
};
