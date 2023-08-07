import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import EditPage from "../../../pages/[detail]/edit";
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

interface IReactQuill {
  placeholder: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("react-quill", () => ({
  __esModule: true,
  default: ({ placeholder, defaultValue, onChange }: IReactQuill) => (
    <input
      type="text"
      data-testid="input-contents"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

const TestComponent = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    setAccessToken("test-accessToken");
  }, []);

  return <EditPage />;
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

  it("defaultValue 테스트", () => {
    expect(screen.getByTestId("input-title")).toHaveValue("테스트 상품명");
    expect(screen.getByTestId("input-contents")).toHaveValue("테스트 상품내용");
    expect(screen.getByTestId("input-price")).toHaveValue("10000");
  });

  it("유효한 폼", async () => {
    fireEvent.change(screen.getByTestId("input-title"), {
      target: { value: "테스트 상품명 수정" },
    });
    fireEvent.change(screen.getByTestId("input-contents"), {
      target: { value: "테스트 상품내용 수정" },
    });
    fireEvent.change(screen.getByTestId("input-price"), {
      target: { value: 15000 },
    });
    fireEvent.click(screen.getByTestId("btn-submit"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/test-item");
    });
  });

  it("취소 버튼 클릭", async () => {
    fireEvent.click(screen.getByTestId("btn-cancel"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/test-item");
    });
  });
});
