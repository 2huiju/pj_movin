// 어떤 컴포넌트에서든 사용할 수 있도록 globalState isEditState 만들어주기
import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
// recoil은 atom 으로 사용

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
