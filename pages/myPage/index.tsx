import { useWithAuth } from "../../src/components/commons/hooks/custom/useWithAuth";
import UsedMarketMyPage from "../../src/components/units/usedMarket/myPage/usedMarketMyPage";

export default function MyPage(): JSX.Element {
  useWithAuth();

  return <UsedMarketMyPage />;
}
