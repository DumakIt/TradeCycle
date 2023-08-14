import { Dispatch, MouseEvent, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import {
  IUseditemQuestion,
  Maybe,
} from "../../../../../../commons/types/generated/types";

export interface IProps {
  id: string;
  data: IUseditemQuestion;
  picture: Maybe<string> | undefined;
  setIsActive: Dispatch<SetStateAction<string>>;
  reset: UseFormReset<{ UpdateComment: string; contents: string }>;
  onClickIsActive: (event: MouseEvent<HTMLDivElement>) => void;
}
