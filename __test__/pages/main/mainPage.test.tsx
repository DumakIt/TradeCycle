import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "../../../pages";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("mainPage 테스트", () => {
  beforeEach(() => {
    render(<MainPage />, { wrapper: MemoryRouterProvider });
  });

  it("리스트 버튼 클릭", async () => {
    fireEvent.click(screen.getByTestId("btn-list"));

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/list");
    });
  });
});
