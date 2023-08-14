import { ChangeEvent, useRef } from "react";
import * as S from "./imgUploadStyles";
import { IProps } from "./imgUploadTypes";

export default function ImgUpload(props: IProps): JSX.Element {
  const imgRef = useRef<HTMLInputElement>(null);

  const onClickImg = (): void => {
    imgRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file !== undefined) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        // 파일리더의 결과값이 string이 아닐수도 있으니 string일때만 실행되도록
        if (typeof data.target?.result === "string") {
          // 미리보기용 이미지 저장
          props.setFakeImages((prev) => ({
            ...prev,
            [props.idx]: data.target?.result,
          }));
          // DB용 이미지 저장
          props.setImages((prev) => ({
            ...prev,
            [props.idx]: file,
          }));
          // 만약 가장 마지막 이미지를 추가했을 경우 새로운 빈 이미지 박스 생성하기 위한 객체 길이 증가
          if (Object.values(props.fakeImages).length - 1 === props.idx) {
            props.setFakeImages((prev) => ({ ...prev, [props.idx + 1]: "" }));
          }
        }
      };
    }
  };

  return (
    <div>
      {Boolean(props.fakeImages[props.idx]) || Boolean(props.images) ? (
        props.fakeImages[props.idx]?.substring(0, 4) === "data" ? (
          <S.Img src={props.fakeImages[props.idx]} onClick={onClickImg} />
        ) : (
          <S.Img
            src={`https://storage.googleapis.com/${props.images}`}
            onClick={onClickImg}
          />
        )
      ) : (
        <S.Img src="/images/addImg.webp" onClick={onClickImg} />
      )}

      <S.DisabledInput
        type="file"
        ref={imgRef}
        onChange={onChangeFile}
        accept="image/jpeg, image/png"
      />
    </div>
  );
}
