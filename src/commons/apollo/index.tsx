import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState, restoreAccessTokenLoadable } from "../stores";
import { onError } from "@apollo/client/link/error";
import { getNewAccessToken } from "../libraries/getNewAccessToken";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const accessTokenLoadable = useRecoilValueLoadable(
    restoreAccessTokenLoadable
  );

  useEffect(() => {
    void accessTokenLoadable.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getNewAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken ?? ""}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend11.codebootcamp.co.kr/graphql04",
    headers: {
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
