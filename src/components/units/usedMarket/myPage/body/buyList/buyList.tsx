import * as S from "./buyListStyles";
import { v4 as uuidv4 } from "uuid";
import { useQueryFetchUsedItemsIBought } from "../../../../../commons/hooks/query/useQueryFetchUsedItemsIBought";
import { IProps } from "./buyListTypes";

export default function BuyList(props: IProps): JSX.Element {
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
          data-testid="div-buyList"
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
