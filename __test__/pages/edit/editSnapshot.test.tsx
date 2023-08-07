import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import EditPage from "../../../pages/[detail]/edit";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";

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

it("edit 페이지 snapshot 테스트", async () => {
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
          <EditPage />
        </ApolloProvider>
      </RecoilRoot>
    );

    expect(result.container).toMatchSnapshot();
  });
});
