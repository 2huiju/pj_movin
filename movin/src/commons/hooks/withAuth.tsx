import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { accessTokenState } from "../store";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          Modal.warning({ content: "로그인이 필요합니다" });
          router.push("/login");
        }
        setAccessToken(newAccessToken);
      });
    }
  }, []);
  return <Component {...props} />;
};
