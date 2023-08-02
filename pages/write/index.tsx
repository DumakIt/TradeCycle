import { useWithAuth } from "../../src/components/commons/hooks/custom/useWithAuth";
import UsedMarketWrite from "../../src/components/units/usedMarket/write/usedMarketWrite";

export default function WritePage(): JSX.Element {
  useWithAuth();

  return <UsedMarketWrite isEdit={false} />;
}
