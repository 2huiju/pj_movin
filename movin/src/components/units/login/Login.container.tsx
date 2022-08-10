import LoginPagePresenter from "./Login.presenter";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
import { LOGIN_USER } from "./Login.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("필수 입력 사항"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리 문자열입니다"
    )
    .required("필수 입력 사항"),
});

export default function LoginPageContainer() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    setAccessToken(result.data?.loginUser.accessToken);
    // console.log(accessToken);
    // mutation해서 받은 토큰을 변수에 담아주기
    localStorage.setItem("refreshToken", "true");
    alert("로그인 성공");
    router.push("/mypage");
  };

  const onClickToSignup = () => {
    router.push("/signup");
  };

  return (
    <>
      <LoginPagePresenter
        onClickLogin={onClickLogin}
        onClickToSignup={onClickToSignup}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
