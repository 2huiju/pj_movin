import * as S from "./Profile.styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

export const RESET_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function MyPageProfileContainer() {
  const router = useRouter();
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
    if (data.password === 로그인패스워드) {
      try {
        const result = resetUserPassword({
          variables: {
            password: data.resetPassword,
          },
        });
        Modal.success({ content: "비밀번호가 변경되었습니다." });
        router.push("/mypage");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.InputTitle>비밀번호 변경</S.InputTitle>
        <S.InputWrapper>
          <S.InputContents>현재 비밀번호</S.InputContents>
          <S.InputBox
            type="password"
            placeholder="현재 비밀번호를 입력해 주세요."
            {...register("password")}
          ></S.InputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputContents>새 비밀번호</S.InputContents>
          <S.InputBox
            type="password"
            placeholder="새 비밀번호를 입력해 주세요."
            {...register("resetPassword")}
          ></S.InputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputContents>비밀번호 확인</S.InputContents>
          <S.InputBox
            type="password"
            placeholder="새 비밀번호를 확인해 주세요."
            {...register("passwordCheck")}
          ></S.InputBox>
        </S.InputWrapper>
        <S.Error>
          {formState.errors.passwordCheck && "비밀번호가 일치하지 않습니다"}
        </S.Error>
        <S.ButtonWrapper>
          <S.SubmitButton onClick={onClickResetPassword}>
            비밀번호 변경
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
