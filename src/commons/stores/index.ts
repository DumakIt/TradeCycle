import { atom, selector } from "recoil";
import { getNewAccessToken } from "../libraries/getNewAccessToken";
import { IUser } from "../types/generated/types";

export const accessTokenState = atom<string | undefined>({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getNewAccessToken();
    return newAccessToken;
  },
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const loggedInUserState = atom<Partial<IUser>>({
  key: "loggedInUserState",
  default: {},
});
