import { act, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import DetailPage from "../../../pages/[detail]";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

it("detail 페이지 snapshot 테스트", async () => {
  mockRouter.setCurrentUrl("/[detail]", { query: { detail: "test-item" } });

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
          <DetailPage />
        </ApolloProvider>
      </RecoilRoot>
    );

    expect(result.container).toMatchSnapshot();
  });
});
