import { Map, MapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import {
  IUseditemAddress,
  Maybe,
} from "../../../../commons/types/generated/types";

interface IKakaoMapDetailProps {
  data: Maybe<IUseditemAddress>;
}

export default function KakaoMapDetail(
  props: IKakaoMapDetailProps
): JSX.Element {
  const { loading } = useInjectKakaoMapApi({
    appkey: "bd267c3409ad63bff12f4bc9683e42a5",
    libraries: ["services"],
  });

  return (
    <>
      {!loading && (
        <Map
          center={{
            lat: Number(props.data?.lat),
            lng: Number(props.data?.lng),
          }}
          level={3}
          isPanto={true}
          style={{ width: "100%", height: "448px" }}
        >
          <MapMarker
            position={{
              lat: Number(props.data?.lat),
              lng: Number(props.data?.lng),
            }}
          />
        </Map>
      )}
    </>
  );
}
