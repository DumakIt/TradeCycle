import DetailHeader from "./header/detailHeader";
import DetailBody from "./body/detailBody";
import DetailAside from "./aside/detailAside";
import { useRouterIdCheck } from "../../../commons/hooks/custom/useRouterIdCheck";
import { useQueryFetchUsedItem } from "../../../commons/hooks/query/useQueryFetchUsedItem";
import * as S from "./usedMarketDetailStyles";

export default function UsedMarketDetail(): JSX.Element {
  const { id } = useRouterIdCheck("detail");
  const { data } = useQueryFetchUsedItem({ useditemId: id });
  return (
    <>
      <DetailHeader data={data?.fetchUseditem} id={id} />
      <S.BodyWrapper>
        <DetailBody data={data?.fetchUseditem} />
        <S.Line></S.Line>
        <DetailAside data={data?.fetchUseditem} id={id} />
      </S.BodyWrapper>
    </>
  );
}
