import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import WritePage from "../../../pages/write";
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
  onChange: (value: string) => void;
}

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("react-quill", () => ({
  __esModule: true,
  default: ({ placeholder, onChange }: IReactQuill) => (
    <input
      type="text"
      data-testid="input-contents"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}));

const TestComponent = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    setAccessToken("test-accessToken");
  }, []);

  return <WritePage />;
};

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
          <TestComponent />
        </ApolloProvider>
      </RecoilRoot>
    );
  });

  it("유효하지 않은 폼 - 미입력", async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByTestId("btn-submit"));

      expect(screen.getByText("상품명을 작성해주세요.")).toBeInTheDocument();
      expect(screen.getByText("상품설명을 작성해주세요.")).toBeInTheDocument();
      expect(screen.getByText("숫자만 작성해주세요.")).toBeInTheDocument();
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

  it("유효하지 않은 폼 - 음수", async () => {
    await waitFor(() => {
      fireEvent.change(screen.getByTestId("input-price"), {
        target: { value: "-10" },
      });

      expect(screen.getByText("잘못된 가격입니다.")).toBeInTheDocument();
    });
  });

  it("유효하지 않은 폼 - 최대 금액 초과", async () => {
    await waitFor(() => {
      fireEvent.change(screen.getByTestId("input-price"), {
        target: { value: "10000001" },
      });

      expect(
        screen.getByText("등록할 수 있는 최대 금액을 초과하였습니다.")
      ).toBeInTheDocument();
    });
  });

  it("유효한 폼", async () => {
    fireEvent.change(screen.getByTestId("input-title"), {
      target: { value: "테스트 상품명" },
    });
    fireEvent.change(screen.getByTestId("input-contents"), {
      target: { value: "테스트 상품내용" },
    });
    fireEvent.change(screen.getByTestId("input-price"), {
      target: { value: 10000 },
    });

    fireEvent.click(screen.getByTestId("btn-submit"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/test-item");
    });
  });

  it("취소 버튼 클릭", async () => {
    fireEvent.click(screen.getByTestId("btn-cancel"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/list");
    });
  });
});
