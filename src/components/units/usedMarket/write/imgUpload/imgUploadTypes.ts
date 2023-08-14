import { Dispatch, SetStateAction } from "react";

export interface IProps {
  idx: number;
  images: string;
  fakeImages: Record<string, string>;
  setImages: Dispatch<SetStateAction<Record<string, string>>>;
  setFakeImages: Dispatch<SetStateAction<Record<string, string>>>;
}
