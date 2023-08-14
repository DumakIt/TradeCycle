import { Dispatch, SetStateAction } from "react";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { IUseditemQuestion } from "../../../../../../commons/types/generated/types";

export interface IProps {
  id: string;
  data: IUseditemQuestion;
  handleSubmit: UseFormHandleSubmit<{
    UpdateComment: string;
    contents: string;
  }>;
  setIsActive: Dispatch<SetStateAction<string>>;
  register: UseFormRegister<{
    UpdateComment: string;
    contents: string;
  }>;
  reset: UseFormReset<{
    UpdateComment: string;
    contents: string;
  }>;
}
