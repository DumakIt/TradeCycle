import * as S from "./buyListStyles";
import { v4 as uuidv4 } from "uuid";
import { useQueryFetchUsedItemsIBought } from "../../../../../commons/hooks/query/useQueryFetchUsedItemsIBought";

interface IBuyListPorps {
  onClickMovePage: (path: string) => () => void;
}

export default function BuyList(props: IBuyListPorps): JSX.Element {
  const { data } = useQueryFetchUsedItemsIBought();

  return (
    <S.Container>
      <S.TitleWrapper>
        <p>번호</p>
        <p>상품명</p>
        <p>판매가격</p>
        <p>날짜</p>
      </S.TitleWrapper>
      {data?.fetchUseditemsIBought.map((el, idx) => (
        <S.ContentsWrapper
          key={uuidv4()}
          onClick={props.onClickMovePage(`/${el._id}`)}
        >
          <p>{idx + 1}</p>
          <p>{el.name}</p>
          <p>{el.price?.toLocaleString()}</p>
          <p>{el.soldAt.slice(0, 10).replaceAll("-", ".")}</p>
        </S.ContentsWrapper>
      ))}
    </S.Container>
  );
}
