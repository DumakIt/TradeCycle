import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import {
  ICreateUseditemInput,
  IQuery,
} from "../../../../commons/types/generated/types";

interface IUseEffectSetFormDataArgs {
  setValue: UseFormSetValue<ICreateUseditemInput>;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export const useEffectSetFormData = (args: IUseEffectSetFormDataArgs): void => {
  useEffect(() => {
    if (args.data?.fetchUseditem !== undefined) {
      args.setValue("contents", args.data?.fetchUseditem?.contents ?? "");
      args.setValue("useditemAddress", {
        lat: args.data?.fetchUseditem.useditemAddress?.lat ?? 37.56682195069747,
        lng:
          args.data?.fetchUseditem.useditemAddress?.lng ?? 126.97865508922976,
      });
    } else {
      args.setValue("useditemAddress", {
        lat: 37.56682195069747,
        lng: 126.97865508922976,
      });
    }
  }, [args.data]);
};
