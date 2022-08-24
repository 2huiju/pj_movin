import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import MyPageProfilePresenter from "./MyPageProfile.presenter";

export const RESET_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function MyPageProfileContainer() {
  const [resetUserPassword] = useMutation(RESET_PASSWORD);

  const schema = yup.object({
    password: yup.string(),
    resetPassword: yup
      .string()
      .matches(
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리 문자열입니다"
      ),
    passwordCheck: yup.string().oneOf([yup.ref("resetPassword"), null]),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickResetPassword = (data: any) => {
    try {
      resetUserPassword({
        variables: {
          password: data.resetPassword,
        },
      });
      Modal.success({ content: "비밀번호가 변경되었습니다." });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <MyPageProfilePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickResetPassword={onClickResetPassword}
    />
  );
}
