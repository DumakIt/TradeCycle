import { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./usedMarketWriteStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./usedMarketWriteVaildation";
import { useRouterMovePage } from "../../../commons/hooks/custom/useRouterMovePage";
import { useMutationCreateUsedItem } from "../../../commons/hooks/mutation/useMutationCreateUsedItem";
import { useEffectSetImage } from "../../../commons/hooks/custom/useEffectSetImage";
import { useMutationUpdateUsedItem } from "../../../commons/hooks/mutation/useMutationUpdateUsedItem";
import { ICreateUseditemInput } from "../../../../commons/types/generated/types";
import { useEffectSetFormData } from "../../../commons/hooks/custom/useEffectSetFormData";
import { wrapAsync } from "../../../commons/utility/asyncFunc";
import { v4 as uuidv4 } from "uuid";
import KakaoMapWrite from "./kakaoMapWrite/kakaoMapWrite";
import ImgUpload from "./imgUpload/imgUpload";
import { IProps } from "./usedMarketWriteTypes";

export default function UsedMarketWrite(props: IProps): JSX.Element {
  const [images, setImages] = useState<Record<string, string>>({ 0: "" });
  const [fakeImages, setFakeImages] = useState<Record<string, string>>({
    0: "",
  });
  const { onClickMovePage } = useRouterMovePage();
  const { createUsedItem } = useMutationCreateUsedItem();
  const { updateUsedItem } = useMutationUpdateUsedItem();
  const { handleSubmit, register, setValue, formState } =
    useForm<ICreateUseditemInput>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  useEffectSetImage({ setImages, data: props.data });
  useEffectSetFormData({ setValue, data: props.data });

  const onChangeQuill = (value: string): void => {
    setValue("contents", value === "<p></br></p>" ? "" : value);
  };

  return (
    <S.Container>
      <form
        onSubmit={wrapAsync(
          handleSubmit(
            props.isEdit
              ? updateUsedItem(props.id ?? "", images)
              : createUsedItem(images)
          )
        )}
      >
        <S.ContainerTitle>
          {props.isEdit ? "상품 수정" : "상품 등록"}
        </S.ContainerTitle>
        <S.Line></S.Line>
        <S.InputsWrapper>
          <S.InputsTitle>상품명</S.InputsTitle>
          <S.Inputs
            data-testid="input-title"
            type="text"
            placeholder="상품명을 작성해주세요"
            defaultValue={props.data?.fetchUseditem?.name ?? ""}
            {...register("name")}
          />
        </S.InputsWrapper>
        <S.inValidInputs>{formState.errors.name?.message}</S.inValidInputs>
        <S.DetailWrapper>
          <S.Detail>상품내용</S.Detail>
          {props.isEdit ? (
            props.data !== undefined ? (
              <S.CustomReactQuill
                placeholder="상품을 설명해주세요."
                defaultValue={props.data?.fetchUseditem?.contents}
                onChange={onChangeQuill}
              />
            ) : (
              <></>
            )
          ) : (
            <S.CustomReactQuill
              placeholder="상품을 설명해주세요."
              onChange={onChangeQuill}
            />
          )}
        </S.DetailWrapper>
        <S.inValidInputs>{formState.errors.contents?.message}</S.inValidInputs>
        <S.InputsWrapper>
          <S.InputsTitle>판매 가격</S.InputsTitle>
          <S.Inputs
            data-testid="input-price"
            type="text"
            placeholder="판매 가격을 숫자만 작성해주세요"
            defaultValue={props.data?.fetchUseditem?.price ?? ""}
            {...register("price")}
          />
        </S.InputsWrapper>
        <S.inValidInputs>{formState.errors.price?.message}</S.inValidInputs>

        <KakaoMapWrite
          setValue={setValue}
          data={props.data?.fetchUseditem?.useditemAddress}
          isEdit={props.isEdit}
        />

        <S.ImgContainer>
          <S.ImgTitle>사진 첨부</S.ImgTitle>
          <S.ImgWrapper>
            {Object.values(props.isEdit ? images : fakeImages).map((_, idx) => (
              <ImgUpload
                key={uuidv4()}
                idx={idx}
                images={images[idx]}
                fakeImages={fakeImages}
                setImages={setImages}
                setFakeImages={setFakeImages}
              />
            ))}
          </S.ImgWrapper>
        </S.ImgContainer>
        <S.BottomLine></S.BottomLine>
        <S.BtnWrapper>
          <S.BtnCancel
            data-testid="btn-cancel"
            type="button"
            onClick={
              props.isEdit
                ? onClickMovePage(`/${props.id ?? ""}`)
                : onClickMovePage("/list")
            }
          >
            취소
          </S.BtnCancel>
          <S.BtnSubmit data-testid="btn-submit">
            {props.isEdit ? "수정" : "등록"}
          </S.BtnSubmit>
        </S.BtnWrapper>
      </form>
    </S.Container>
  );
}
