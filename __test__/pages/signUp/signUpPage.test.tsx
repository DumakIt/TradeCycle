import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import SignUpPage from "../../../pages/signUp";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("signUpPage 테스트", () => {
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
          <SignUpPage />
        </ApolloProvider>
      </RecoilRoot>
    );
  });

  it("유효하지 않은 폼 - 미입력", async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("btn-signUp"));

      expect(
        screen.getByText("이메일 아이디를 @까지 정확하게 입력해주세요.")
      ).toBeInTheDocument();
      expect(
        screen.getByText("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
      ).toBeInTheDocument();
      expect(
        screen.getByText("비밀번호를 한번 더 입력해주세요.")
      ).toBeInTheDocument();
      expect(screen.getByText("이름을 입력해 주세요.")).toBeInTheDocument();
    });
  });

  it("유효하지 않은 폼 - 서로 다른 비밀번호", async () => {
    await waitFor(() => {
      fireEvent.change(screen.getByTestId("input-password"), {
        target: { value: "123123qwe" },
      });
      fireEvent.change(screen.getByTestId("input-passwordCheck"), {
        target: { value: "ewq321321" },
      });
      fireEvent.click(screen.getByTestId("btn-signUp"));

      expect(
        screen.getByText("비밀번호가 일치하지 않습니다.")
      ).toBeInTheDocument();
    });
  });

  it("유효하지 않은 폼 - 닉네임 8자리 초과", async () => {
    await waitFor(() => {
      fireEvent.change(screen.getByTestId("input-name"), {
        target: { value: "테스트테스트테스트" },
      });
      fireEvent.click(screen.getByTestId("btn-signUp"));

      expect(
        screen.getByText("닉네임은 최대 8글자까지 가능합니다.")
      ).toBeInTheDocument();
    });
  });

  it("유효한 폼", async () => {
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "test@test" },
    });
    fireEvent.change(screen.getByTestId("input-password"), {
      target: { value: "123123qwe" },
    });
    fireEvent.change(screen.getByTestId("input-passwordCheck"), {
      target: { value: "123123qwe" },
    });
    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "테스트" },
    });
    fireEvent.click(screen.getByTestId("btn-login"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/login");
    });
  });

  it("로그인 버튼 클릭", async () => {
    fireEvent.click(screen.getByTestId("btn-login"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/login");
    });
  });
});
