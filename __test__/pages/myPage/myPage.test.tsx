import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import MyPage from "../../../pages/myPage";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";
import {
  accessTokenState,
  loggedInUserState,
} from "../../../src/commons/stores";
import { useEffect } from "react";

jest.mock("next/router", () => require("next-router-mock"));

const TestComponent = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setLoggedInUserState] = useRecoilState(loggedInUserState);

  useEffect(() => {
    setAccessToken("test-accessToken");
    setLoggedInUserState({ _id: "test-user" });
  }, []);

  return <MyPage />;
};

describe("myPage 테스트", () => {
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
            <TestComponent />
          </ApolloProvider>
        </RecoilRoot>
      );
    });
  });

  it("fetchUseditemsISold 렌더링", async () => {
    expect(screen.getByText("테스트 상품명 판매")).toBeInTheDocument();
    expect(screen.getByText("10,000")).toBeInTheDocument();
    expect(screen.getByText("2023.08.06")).toBeInTheDocument();
  });

  it("fetchUseditemsIBought 렌더링", async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("btn-buyList"));
    });

    expect(screen.getByText("테스트 상품명 구매")).toBeInTheDocument();
    expect(screen.getByText("12,000")).toBeInTheDocument();
    expect(screen.getByText("2023.08.06")).toBeInTheDocument();
  });

  it("판매한 상품 클릭", async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("div-myItemList"));
      expect(mockRouter.asPath).toEqual("/test-item-sold");
    });
  });

  it("구매한 상품 클릭", async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("btn-buyList"));
      fireEvent.click(screen.getByTestId("div-buyList"));
      expect(mockRouter.asPath).toEqual("/test-item-bought");
    });
  });
});
