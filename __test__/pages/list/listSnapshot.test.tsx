import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import ListPage from "../../../pages/list";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";

it("list 페이지 snapshot 테스트", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });
  await act(async () => {
    const result = render(
      <RecoilRoot>
        <ApolloProvider client={client}>
          <ListPage />
        </ApolloProvider>
      </RecoilRoot>
    );
    expect(result.container).toMatchSnapshot();
  });
});
