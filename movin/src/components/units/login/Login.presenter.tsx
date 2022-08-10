import * as S from "./Login.styles";

export default function LoginPagePresenter(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.SubWrapper>
          <S.TitleWrapper>
            <S.Title>로그인</S.Title>
            <S.SubTitle>Login</S.SubTitle>
          </S.TitleWrapper>
          <S.InputBox
            type="text"
            placeholder="이메일"
            {...props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.InputBox
            type="password"
            placeholder="비밀번호"
            {...props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <S.LoginBox isValid={props.formState.isValid}>로그인</S.LoginBox>
          <S.SignUpWrapper>
            <S.SignUpFont>아직 계정이 없으신가요?</S.SignUpFont>
            <S.SignUp onClick={props.onClickToSignup}>회원가입</S.SignUp>
          </S.SignUpWrapper>
        </S.SubWrapper>
      </S.Wrapper>
    </form>
  );
}
