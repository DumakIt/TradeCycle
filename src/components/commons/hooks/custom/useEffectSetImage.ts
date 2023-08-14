import { Dispatch, SetStateAction, useEffect } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

interface IUseEffectSetImageArgs {
  setImages: Dispatch<SetStateAction<Record<number, string>>>;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export const useEffectSetImage = (args: IUseEffectSetImageArgs): void => {
  useEffect(() => {
    if (args.data?.fetchUseditem?.images === undefined) return;
    args.setImages({ ...args.data?.fetchUseditem?.images });
  }, [args.data?.fetchUseditem?.images]);
};
