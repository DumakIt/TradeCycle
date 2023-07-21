import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../../../src/commons/apollo";
import SignUpPage from "../../../pages/signUp";

it("signUp 페이지 snapshot 테스트", () => {
  const result = render(
    <RecoilRoot>
      <ApolloSetting>
        <SignUpPage />
      </ApolloSetting>
    </RecoilRoot>
  );
  expect(result.container).toMatchSnapshot();
});
