import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import MyPage from "../../../pages/myPage";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";

it("detail 페이지 snapshot 테스트", async () => {
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
          <MyPage />
        </ApolloProvider>
      </RecoilRoot>
    );

    expect(result.container).toMatchSnapshot();
  });
});
