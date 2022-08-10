import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";
import { onError } from "@apollo/client/link/error";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log(setAccessToken);

  useEffect(() => {
    // 기존 방식
    // const accessToken = localStorage.getItem("accessToken");
    // setAccessToken(accessToken || "");
    // 만약에 accessToken이 비어있으면 문자열로 바꿔줘,,

    // 3-2.새로운 방식(새로고침해도 로그인 안 풀리게 하기)
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // AccessToken 만료시 오류 찾을 수 있도록 onError 함수 사용 (위에 임포트하기)
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 에러났을 때 실행시킬 콜백함수 집어넣기          operation(방금 실패한 쿼리 정보), forward(요청하는거)

    // 1.에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 2.해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3.refreshToken으로 accessToken 재발급 받기

          // refreshToken을 사용하기 위해서는 graphQL 요청을 보내야 하는데,
          // errorLink를 생성하는 코드는 ApolloProvider 바깥(=현재 위치 ApolloProvider)에 있기 때문에
          // useQuery나 useApolloClient등을 이용해 graphQL 요청을 보낼 수가 없음
          // 이러한 문제를 해결하기 위해서 graphql-request 라이브러리(apollo setting없이 graphql을 axios처럼 사용할 수있는)를 사용

          // 3-1) getAccessToken import
          getAccessToken().then((newAccessToken) => {
            // 3-2) newAccessToken 저장하기
            setAccessToken(newAccessToken); // RecoilState도 새로운 토큰으로 바꿔주기

            // 4.재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // 4-1) operation(방금 실패했던 쿼리)정보는 모두 유지한 채 토큰만 새걸로 바꿔치기해줌
            operation.setContext({
              // 헤더 부분만 건드릴거야
              headers: {
                // Authorization 만 작성해주면 다른건 다 지워지고 새 토큰으로 바꿔치기 한 것만 남기 때문에
                // 기존 헤더는 그대로 유지한 채 가지고 와서 Authorization 만 새 토큰으로 바꿔주기
                ...operation.getContext().headers, // operation 정보들을 가져오기
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });
            // 4-2) 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    // uploadLink는 명확한 타입이 없기 때문에 docs 에 나온대로 unknown as ApolloLink 작성
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
