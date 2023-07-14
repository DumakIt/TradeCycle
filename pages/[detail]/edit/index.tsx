import { useRouterIdCheck } from "../../../src/components/commons/hooks/custom/useRouterIdCheck";
import { useWithAuth } from "../../../src/components/commons/hooks/custom/useWithAuth";
import { useQueryFetchUsedItem } from "../../../src/components/commons/hooks/query/useQueryFetchUsedItem";
import UsedMarketWrite from "../../../src/components/units/usedMarket/write/usedMarketWrite";

export default function editPage(): JSX.Element {
  useWithAuth();
  const { id } = useRouterIdCheck("detail");
  const { data } = useQueryFetchUsedItem({ useditemId: id });

  return <UsedMarketWrite isEdit={true} data={data} id={id} />;
}
