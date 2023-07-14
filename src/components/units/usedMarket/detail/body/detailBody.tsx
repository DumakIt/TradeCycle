import * as S from "./detailBodyStyles";
import Dompurify from "dompurify";
import KakaoMapDetail from "../../../../commons/usedMarket/kakaoMapDetail/kakaoMapDetail";
import { v4 as uuidv4 } from "uuid";
import { IUseditem } from "../../../../../commons/types/generated/types";

export interface IDetailBodyProps {
  data: IUseditem | undefined;
}

export default function DetailBody(props: IDetailBodyProps): JSX.Element {
  return (
    <S.Container>
      <S.ItemInfoTitle>상품정보</S.ItemInfoTitle>
      <S.Line></S.Line>
      <S.ImgContainer>
        {props.data?.images?.map(
          (el, idx) =>
            el !== "" &&
            idx !== 0 && (
              <S.ImgWrapper key={uuidv4()}>
                <img src={`https://storage.googleapis.com/${el}`} />
              </S.ImgWrapper>
            )
        )}
      </S.ImgContainer>

      {typeof window !== "undefined" ? (
        <S.ItemContents
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.data?.contents ?? ""),
          }}
        />
      ) : (
        <S.ItemContents></S.ItemContents>
      )}
      <S.SellLocationWrapper>
        {props.data?.useditemAddress !== undefined && (
          <>
            <S.SellLocationTitle>
              <S.LocationIcon />
              <div>거래지역</div>
            </S.SellLocationTitle>
            <KakaoMapDetail data={props.data?.useditemAddress} />
          </>
        )}
      </S.SellLocationWrapper>
    </S.Container>
  );
}
