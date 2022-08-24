import SignupPagePresenter from "./Signup.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Signup.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

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
  passwordCheck: yup.string().oneOf([yup.ref("password"), null]),
  name: yup
    .string()
    .max(10, "이름은 10글자 이내 문자열입니다.")
    .required("필수 입력 사항"),
});

export default function SignUpPageContainer() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickSignup = (data: any) => {
    console.log(data);

    if (data.password === data.passwordCheck) {
      try {
        const result = createUser({
          variables: {
            createUserInput: {
              email: data.email,
              password: data.password,
              name: data.name,
            },
          },
        });
        router.push("/login");
        Modal.success({ content: "회원가입 되었습니다" });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onClickToLogin = () => {
    router.push("/login");
  };

  const onClickToCancel = () => {
    router.push("/");
  };

  return (
    <>
      <SignupPagePresenter
        onClickSignup={onClickSignup}
        onClickToLogin={onClickToLogin}
        onClickToCancel={onClickToCancel}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
