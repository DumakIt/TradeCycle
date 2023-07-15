import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import * as S from "./imgUploadStyles";

interface IImgUploadArgs {
  idx: number;
  images: string;
  fakeImages: Record<string, string>;
  setImages: Dispatch<SetStateAction<Record<string, string>>>;
  setFakeImages: Dispatch<SetStateAction<Record<string, string>>>;
}

export default function ImgUpload(args: IImgUploadArgs): JSX.Element {
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
          console.log(data.target?.result);
          // 미리보기용 이미지 저장
          args.setFakeImages((prev) => ({
            ...prev,
            [args.idx]: data.target?.result,
          }));
          // DB용 이미지 저장
          args.setImages((prev) => ({
            ...prev,
            [args.idx]: file,
          }));
          // 만약 가장 마지막 이미지를 추가했을 경우 새로운 빈 이미지 박스 생성하기 위한 객체 길이 증가
          if (Object.values(args.fakeImages).length - 1 === args.idx) {
            args.setFakeImages((prev) => ({ ...prev, [args.idx + 1]: "" }));
          }
        }
      };
    }
  };

  return (
    <div>
      {Boolean(args.fakeImages[args.idx]) || Boolean(args.images) ? (
        args.fakeImages[args.idx]?.substring(0, 4) === "data" ? (
          <S.Img src={args.fakeImages[args.idx]} onClick={onClickImg} />
        ) : (
          <S.Img
            src={`https://storage.googleapis.com/${args.images}`}
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
