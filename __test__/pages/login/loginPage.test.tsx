import {
  fireEvent,
  queryByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import LoginPage from "../../../pages/login";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("loginPage 테스트", () => {
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
          <LoginPage />
        </ApolloProvider>
      </RecoilRoot>
    );
  });

  it("유효하지 않은 폼", () => {
    fireEvent.click(screen.getByTestId("btn-login"));

    expect(
      queryByText(
        screen.getByTestId("input-email"),
        "이메일 아이디를 @까지 정확하게 입력해주세요"
      )
    );
    expect(
      queryByText(
        screen.getByTestId("input-password"),
        "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요"
      )
    );
  });

  it("유효한 폼", async () => {
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "test@test" },
    });
    fireEvent.change(screen.getByTestId("input-password"), {
      target: { value: "123123qwe" },
    });
    fireEvent.click(screen.getByTestId("btn-login"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/list");
    });
  });
});
