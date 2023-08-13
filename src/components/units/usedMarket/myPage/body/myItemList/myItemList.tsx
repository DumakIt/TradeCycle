import * as S from "./myItemListStyles";
import { v4 as uuidv4 } from "uuid";
import { useQueryFetchUsedItemsISold } from "../../../../../commons/hooks/query/useQueryFetchUsedItemsISold";

interface IMyItemListProps {
  onClickMovePage: (path: string) => () => void;
}

export default function MyItemList(props: IMyItemListProps): JSX.Element {
  const { data } = useQueryFetchUsedItemsISold();

  return (
    <S.Container>
      <S.TitleWrapper>
        <p>번호</p>
        <p>상품명</p>
        <p>판매가격</p>
        <p>날짜</p>
      </S.TitleWrapper>
      {data?.fetchUseditemsISold.map((el, idx) => (
        <S.ContentsWrapper
          key={uuidv4()}
          onClick={props.onClickMovePage(`/${el._id}`)}
        >
          <p>{idx + 1}</p>
          <p>{el.name}</p>
          <p>{el.price?.toLocaleString()}</p>
          <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
        </S.ContentsWrapper>
      ))}
    </S.Container>
  );
}
