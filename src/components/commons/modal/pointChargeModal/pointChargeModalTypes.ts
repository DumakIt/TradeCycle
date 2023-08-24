import { IUser } from "../../../../commons/types/generated/types";

export interface IProps {
  isOpen: boolean;
  data: Partial<IUser>;
  changeIsOpen: () => void;
}
