import { ChangeEvent } from "react";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { searchState } from "../../../../commons/stores";

export const useSearch = (): ((
  event: ChangeEvent<HTMLInputElement>
) => void) => {
  const [, setSearch] = useRecoilState(searchState);

  const debounce = _.debounce((keyword) => {
    setSearch(keyword);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    debounce(event.currentTarget.value ?? "");
  };
  return onChangeSearch;
};
