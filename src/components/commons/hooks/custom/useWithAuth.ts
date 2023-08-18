import { Modal } from "antd";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../../commons/stores";
import { useRouterMovePage } from "./useRouterMovePage";

export const useWithAuth = (): void => {
  const { routerMovePage } = useRouterMovePage();
  const restoreAccess = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    void restoreAccess
      .toPromise()
      .then((newAccessToken) => {
        if (accessToken === "" && newAccessToken === undefined) {
          Modal.info({
            content: "로그인 후 이용 가능합니다",
            onOk() {
              routerMovePage("/login");
            },
            okButtonProps: {
              style: { backgroundColor: "black", color: "white" },
            },
          });
        }
      })
      .catch(() => {});
  }, []);
};
