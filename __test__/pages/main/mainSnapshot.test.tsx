import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "../../../pages";

it("main 페이지 snapshot 테스트", () => {
  const result = render(<MainPage />);
  expect(result.container).toMatchSnapshot();
});
