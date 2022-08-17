import * as S from "./MyPageProfile.styles";

export default function MyPageProfilePresenter(props) {
  return (
    <S.Wrapper>
      <S.InputTitle>비밀번호 변경</S.InputTitle>
      <S.InputWrapper>
        <S.InputContents>현재 비밀번호</S.InputContents>
        <S.InputBox
          type="password"
          placeholder="현재 비밀번호를 입력해 주세요."
          {...props.register("password")}
        ></S.InputBox>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputContents>새 비밀번호</S.InputContents>
        <S.InputBox
          type="password"
          placeholder="새 비밀번호를 입력해 주세요."
          {...props.register("resetPassword")}
        ></S.InputBox>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputContents>비밀번호 확인</S.InputContents>
        <S.InputBox
          type="password"
          placeholder="새 비밀번호를 확인해 주세요."
          {...props.register("passwordCheck")}
        ></S.InputBox>
      </S.InputWrapper>
      <S.Error>
        {props.formState.errors.passwordCheck && "비밀번호가 일치하지 않습니다"}
      </S.Error>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.onClickResetPassword}>
          비밀번호 변경
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
