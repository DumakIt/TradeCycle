import { Dispatch, SetStateAction, useRef } from "react";
import { UseMutationUploadFile } from "../../hooks/mutation/useMutationUploadFile";
import * as S from "./imgUploadStyles";

interface IImgUploadArgs {
  idx: number;
  images: Record<number, string>;
  setImages: Dispatch<SetStateAction<Record<number, string>>>;
}

export default function ImgUpload(args: IImgUploadArgs): JSX.Element {
  const imgRef = useRef<HTMLInputElement>(null);
  const { uploadFile } = UseMutationUploadFile();

  const onClickImg = (): void => {
    imgRef.current?.click();
  };

  return (
    <div>
      {args.images[args.idx] !== "" ? (
        <S.Img
          src={`https://storage.googleapis.com/${args.images[args.idx]}`}
          onClick={onClickImg}
        />
      ) : (
        <S.Img src="/images/addImg.webp" onClick={onClickImg} />
      )}

      <S.DisabledInput
        type="file"
        ref={imgRef}
        onChange={(event) => {
          void uploadFile({ ...args })(event);
        }}
        accept="image/jpeg, image/png"
      />
    </div>
  );
}
