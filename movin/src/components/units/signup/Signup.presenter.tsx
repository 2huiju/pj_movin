import * as S from "./Signup.styles";
export default function SignupPagePresenter(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignup)}>
      <S.Wrapper>
        <S.SubWrapper>
          <S.TitleWrapper>
            <S.Title>회원가입</S.Title>
            <S.SubTitle>Sign up</S.SubTitle>
          </S.TitleWrapper>
          <S.InputWrapper>
            <S.InputTitle>이메일</S.InputTitle>
            <S.InputBox
              type="text"
              placeholder="가입하실 이메일 주소를 입력해주세요"
              {...props.register("email")}
            />
          </S.InputWrapper>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.InputWrapper>
            <S.InputTitle>이름</S.InputTitle>
            <S.InputBox
              type="text"
              placeholder="이름을 입력해주세요"
              {...props.register("name")}
            />
          </S.InputWrapper>
          <S.Error>{props.formState.errors.name?.message}</S.Error>
          <S.InputWrapper>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.InputBox
              type="password"
              placeholder="영문,숫자,특수문자 조합 8~16자리를 입력해주세요."
              {...props.register("password")}
            />
          </S.InputWrapper>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <S.InputWrapper>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <S.InputBox
              type="password"
              placeholder="영문,숫자,특수문자 조합 8~16자리를 입력해주세요."
              {...props.register("passwordCheck")}
            />
          </S.InputWrapper>
          <S.Error>
            {props.formState.errors.passwordCheck &&
              "비밀번호가 일치하지 않습니다"}
          </S.Error>
          <S.ButtonWrapper>
            <S.LoginBox isValid={props.formState.isValid}>
              회원가입하기
            </S.LoginBox>
            <S.LoginBox2 type="button" onClick={props.onClickToCancel}>
              취소
            </S.LoginBox2>
          </S.ButtonWrapper>
          <S.SignUpWrapper>
            <S.SignUpFont>이미 아이디가 있으신가요?</S.SignUpFont>
            <S.SignUp onClick={props.onClickToLogin}>로그인</S.SignUp>
          </S.SignUpWrapper>
        </S.SubWrapper>
      </S.Wrapper>
    </form>
  );
}
