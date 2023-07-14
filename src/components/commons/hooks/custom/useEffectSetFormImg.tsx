import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { ICreateUseditemInput } from "../../../../commons/types/generated/types";

interface IUseEffectSetFormImgArgs {
  setValue: UseFormSetValue<ICreateUseditemInput>;
  images: Record<number, string>;
}

export const useEffectSetFormImg = (args: IUseEffectSetFormImgArgs): void => {
  useEffect(() => {
    args.setValue("images", Object.values(args.images));
  }, [args.images]);
};
