import { Dispatch, SetStateAction } from "react";
import { IUseditemQuestionAnswer } from "../../../../../../commons/types/generated/types";

export interface IProps {
  id: string;
  useditemQuestionId: string;
  data: IUseditemQuestionAnswer;
  setIsActive: Dispatch<SetStateAction<string>>;
}
