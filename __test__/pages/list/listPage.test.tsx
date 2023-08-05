import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("listPage 테스트", () => {
  beforeEach(async () => {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: "http://mock.com/graphql",
        fetch,
      }),
      cache: new InMemoryCache(),
    });

    await act(async () => {
      render(
        <RecoilRoot>
          <ApolloProvider client={client}>
            <ListPage />
          </ApolloProvider>
        </RecoilRoot>
      );
    });
  });

  it("상품등록 버튼 클릭", async () => {
    fireEvent.click(screen.getByTestId("btn-write"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/write");
    });
  });
});
