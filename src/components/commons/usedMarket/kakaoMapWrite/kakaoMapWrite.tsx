import * as S from "./kakaoMapWriteStyles";
import { ChangeEvent, useState } from "react";
import { Map, MapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import {
  ICreateUseditemInput,
  IUseditemAddress,
  Maybe,
} from "../../../../commons/types/generated/types";
import { UseFormSetValue } from "react-hook-form";

interface IKakaoMapWriteProps {
  isEdit: boolean;
  data: Maybe<IUseditemAddress> | undefined;
  setValue: UseFormSetValue<ICreateUseditemInput>;
}

export default function KakaoMapWrite(props: IKakaoMapWriteProps): JSX.Element {
  const [keyword, setKeyword] = useState("서울 시청");
  const [position, setPosition] = useState(
    props.isEdit && props.data !== undefined
      ? { lat: Number(props.data?.lat), lng: Number(props.data?.lng) }
      : { lat: 37.56682195069747, lng: 126.97865508922976 }
  );
  const [MapCenter, setMapCenter] = useState({
    center:
      props.isEdit && props.data !== undefined
        ? { lat: Number(props.data?.lat), lng: Number(props.data?.lng) }
        : { lat: 37.56682195069747, lng: 126.97865508922976 },
    isPanto: true,
  });

  const { loading } = useInjectKakaoMapApi({
    appkey: "bd267c3409ad63bff12f4bc9683e42a5",
    libraries: ["services"],
  });

  const onClickMapMarker = (_t: any, mouseEvent: any): void => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
    props.setValue("useditemAddress", {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.currentTarget.value);
  };

  const onClickKeywordSearch = (): void => {
    const ps = new window.kakao.maps.services.Places();
    const placesSearchCB = (data: any, status: any): void => {
      if (status === kakao.maps.services.Status.OK) {
        const searchResult = data[0];

        setMapCenter({
          isPanto: true,
          center: { lat: searchResult.y, lng: searchResult.x },
        });
        setPosition({ lat: searchResult.y, lng: searchResult.x });
        props.setValue("useditemAddress.lat", searchResult.y);
        props.setValue("useditemAddress.lng", searchResult.x);
      }
    };
    ps.keywordSearch(keyword, placesSearchCB);
  };

  return (
    <>
      <S.Title>거래 위치</S.Title>
      <S.Container>
        <div>
          <S.KeywordInput
            type="text"
            placeholder="거래장소를 입력해 주세요."
            onChange={onChangeKeyword}
          />
          <S.SearchBtn type="button" onClick={onClickKeywordSearch}>
            검색
          </S.SearchBtn>
        </div>
        {!loading && position.lat !== undefined && (
          <>
            <Map
              center={MapCenter.center}
              isPanto={MapCenter.isPanto}
              level={3}
              style={{ width: "100%", height: "600px" }}
              onClick={onClickMapMarker}
            >
              <MapMarker position={position} />
            </Map>
          </>
        )}
      </S.Container>
    </>
  );
}
