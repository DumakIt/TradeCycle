import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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

jest.mock("next/router", () => require("next-router-mock"));

const TestComponent = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  setAccessToken("test-accessToken");

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

  it("상품명 입력 요소가 제대로 렌더링되었는지 확인", async () => {
    await waitFor(() => {
      const inputTitle = screen.getByTestId("input-title");
      expect(inputTitle).toBeInTheDocument();
    });
  });
});

// describe("UsedMarketWrite 컴포넌트 테스트", () => {
//   it("상품명 입력 요소가 제대로 렌더링되었는지 확인", () => {
//     const client = new ApolloClient({
//       link: new HttpLink({
//         uri: "http://mock.com/graphql",
//         fetch,
//       }),
//       cache: new InMemoryCache(),
//     });

//     render(
//       <RecoilRoot>
//         <ApolloProvider client={client}>
//           <WritePage />
//         </ApolloProvider>
//       </RecoilRoot>
//     );

//     // input 요소를 data-testid 속성으로 찾아서 존재하는지 확인
//     const inputTitle = screen.getByTestId("input-title");
//     expect(inputTitle).toBeInTheDocument();
//   });
// });
