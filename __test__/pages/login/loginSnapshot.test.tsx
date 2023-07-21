import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../../../src/commons/apollo";
import LoginPage from "../../../pages/login";

it("login 페이지 snapshot 테스트", () => {
  const result = render(
    <RecoilRoot>
      <ApolloSetting>
        <LoginPage />
      </ApolloSetting>
    </RecoilRoot>
  );
  expect(result.container).toMatchSnapshot();
});
