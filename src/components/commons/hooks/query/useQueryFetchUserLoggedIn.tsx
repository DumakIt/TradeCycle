import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../../commons/stores";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export const useQueryFetchUserLoggedIn = (): typeof data => {
  const [, setLoggedInUser] = useRecoilState(loggedInUserState);
  const data =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  if (data.data !== undefined) {
    setLoggedInUser(data.data.fetchUserLoggedIn);
  }

  return data;
};
