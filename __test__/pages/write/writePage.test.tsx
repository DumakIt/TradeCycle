import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("writePage 테스트", () => {
  beforeEach(() => {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: "http://mock.com/graphql",
        fetch,
      }),
      cache: new InMemoryCache(),
    });

    render(
      <RecoilRoot>
        <ApolloProvider client={client}>
          <WritePage />
        </ApolloProvider>
      </RecoilRoot>
    );
  });

  it("유효하지 않은 폼 - 미입력", async () => {
    await waitFor(() => {
      expect(screen.getByText("판매 가격")).toBeInTheDocument();
      fireEvent.click(screen.getByTestId("btn-submit"));

      expect(screen.getByText("상품명을 작성해주세요.")).toBeInTheDocument();
      expect(screen.getByText("상품설명을 작성해주세요.")).toBeInTheDocument();
      expect(screen.getByText("가격을 작성해 주세요.")).toBeInTheDocument();
    });
  });

  it("유효하지 않은 폼 - 숫자 외 다른 문자", async () => {
    await waitFor(() => {
      fireEvent.change(screen.getByTestId("input-price"), {
        target: { value: "abcdef" },
      });

      expect(screen.getByText("숫자만 작성해주세요.")).toBeInTheDocument();
    });
  });
});
