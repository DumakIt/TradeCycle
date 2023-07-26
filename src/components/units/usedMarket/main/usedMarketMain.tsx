import Link from "next/link";
import * as S from "./usedMarketMainStyles";

export default function UsedMarketMain(): JSX.Element {
  return (
    <S.Container>
      <S.GrayWrapper>
        <div>
          <S.Title>버리지 말아요</S.Title>
          <S.Text>
            더이상 사용하지 않는 물건 버리거나
            <br /> 그냥 쌓아 두고만 있나요?
          </S.Text>
        </div>
        <S.FirstSecondImg src="/images/mainImgFirst.webp" />
      </S.GrayWrapper>
      <S.WhiteWrapper>
        <S.FirstSecondImg src="/images/mainImgSecond.webp" />
        <div>
          <S.Title>누군가는 필요해요</S.Title>
          <S.Text>
            나는 필요없어도
            <br /> 누군가는 그것이 필요하답니다
          </S.Text>
        </div>
      </S.WhiteWrapper>
      <S.GrayWrapper>
        <div>
          <S.Title>여기서 해보아요</S.Title>
          <Link href="/list">
            <S.ListBtn data-testid="btn-list">TradeCycle 매물보기</S.ListBtn>
          </Link>
        </div>
        <S.ThirdImg src="/images/mainImgThird.webp" />
      </S.GrayWrapper>
    </S.Container>
  );
}
