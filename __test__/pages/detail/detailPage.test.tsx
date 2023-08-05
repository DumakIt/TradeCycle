import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import DetailPage from "../../../pages/[detail]";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";
import { accessTokenState } from "../../../src/commons/stores";
import { useEffect } from "react";

jest.mock("next/router", () => require("next-router-mock"));

const TestComponent = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    setAccessToken("test-accessToken");
  }, []);

  return <DetailPage />;
};

describe("detailPage 테스트", () => {
  beforeEach(async () => {
    mockRouter.setCurrentUrl("/[detail]", { query: { detail: "test-item" } });

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
            <TestComponent />
          </ApolloProvider>
        </RecoilRoot>
      );
    });
  });

  it("useQueryFetchUsedItem 렌더링", async () => {
    await waitFor(() => {
      expect(screen.getByText("테스트 상품명")).toBeInTheDocument();
      expect(screen.getByText("테스트 상품내용")).toBeInTheDocument();
      expect(screen.getByText("10,000")).toBeInTheDocument();
      expect(screen.getByText("테스트 판매자")).toBeInTheDocument();
    });
  });

  it("useQueryFetchUsedItemQuestions 렌더링", async () => {
    await waitFor(() => {
      expect(screen.getByText("테스트 댓글유저")).toBeInTheDocument();
      expect(screen.getByText("테스트 댓글")).toBeInTheDocument();
      expect(screen.getByText("2023.08.05")).toBeInTheDocument();
    });
  });
});
