import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import WritePage from "../../../pages/write";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";

it("write 페이지 snapshot 테스트", () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  const result = render(
    <RecoilRoot>
      <ApolloProvider client={client}>
        <WritePage />
      </ApolloProvider>
    </RecoilRoot>
  );
  expect(result.container).toMatchSnapshot();
});
