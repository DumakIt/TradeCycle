import { MouseEvent } from "react";
import { IUser } from "../../../../../commons/types/generated/types";

export interface IProps {
  loggedInUser: Partial<IUser>;
  isActive: string;
  onClickIsActive: (event: MouseEvent<HTMLParagraphElement>) => void;
}
