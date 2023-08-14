import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";

export interface IProps {
  id: string;
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  reset: UseFormReset<{
    UpdateComment: string;
    contents: string;
  }>;
}
