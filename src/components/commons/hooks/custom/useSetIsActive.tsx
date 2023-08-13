import { Dispatch, MouseEvent, SetStateAction, useState } from "react";

export const useSetIsActive = (
  selectText?: string
): [(event: MouseEvent) => void, string, Dispatch<SetStateAction<string>>] => {
  const [isActive, setIsActive] = useState(selectText ? selectText : "");

  const onClickIsActive = (event: MouseEvent): void => {
    setIsActive(event.currentTarget.id);
  };
  return [onClickIsActive, isActive, setIsActive];
};
