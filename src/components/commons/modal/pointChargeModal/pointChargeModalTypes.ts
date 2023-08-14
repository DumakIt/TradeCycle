import { IUser } from "../../../../commons/types/generated/types";

export interface IProps {
  isOpen: boolean;
  data: IUser;
  changeIsOpen: () => void;
}
