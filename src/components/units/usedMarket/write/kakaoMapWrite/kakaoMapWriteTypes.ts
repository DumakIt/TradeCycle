import { UseFormSetValue } from "react-hook-form";
import {
  ICreateUseditemInput,
  IUseditemAddress,
  Maybe,
} from "../../../../../commons/types/generated/types";

export interface IProps {
  isEdit: boolean;
  data: Maybe<IUseditemAddress> | undefined;
  setValue: UseFormSetValue<ICreateUseditemInput>;
}
