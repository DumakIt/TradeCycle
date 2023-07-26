import * as S from "./usedMarketListStyles";
import InfiniteScroll from "react-infinite-scroller";
import { useQueryFetchUsedItems } from "../../../commons/hooks/query/useQueryFetchUseditems";
import { CreateAtTime } from "../../../commons/utility/createAtTime";
import { IUseditem } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../../../commons/hooks/custom/useRouterMovePage";
import { v4 as uuidv4 } from "uuid";

export default function UsedMarketList(): JSX.Element {
  const { data, FetchMore } = useQueryFetchUsedItems();
  const { onClickMovePage } = useRouterMovePage();

  return (
    <S.Container>
      <S.WriteBtn data-testid="btn-write" onClick={onClickMovePage("/write")}>
        상품등록
      </S.WriteBtn>
      <InfiniteScroll loadMore={FetchMore} hasMore={true}>
        <S.ItemContainer>
          {data?.fetchUseditems.map((el: IUseditem) => (
            <S.ItemWrapper
              key={uuidv4()}
              onClick={onClickMovePage(`/${el._id}`)}
            >
              <S.ImgWrapper isImg={Boolean(el.images?.[0])}>
                <img
                  src={
                    el.images?.[0] !== undefined && el.images?.[0] !== ""
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "/images/defaultItem.webp"
                  }
                />
              </S.ImgWrapper>
              <S.ContentsWrapper>
                <div>{el.name}</div>
                <S.ContentsBottomWrapper>
                  <div>{el.price?.toLocaleString()}원</div>
                  <div>{CreateAtTime(el.createdAt)}</div>
                </S.ContentsBottomWrapper>
              </S.ContentsWrapper>
            </S.ItemWrapper>
          ))}
        </S.ItemContainer>
      </InfiniteScroll>
    </S.Container>
  );
}
