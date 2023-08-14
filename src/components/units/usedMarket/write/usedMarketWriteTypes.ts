import { IQuery } from "../../../../commons/types/generated/types";

export interface IProps {
  isEdit: boolean;
  id?: string;
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
}
