import * as S from "./ProductCommentWrite.styles";

export default function ProductCommentWriteUI(props: any) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdateComment : props.onClickComment
      )}
    >
      <S.Wrapper>
        <S.CommentTitle>문의하기</S.CommentTitle>
        <S.CommentContents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...props.register("contents")}
          defaultValue={props.el?.contents}
          onChange={props.onChangeContentsLength}
        ></S.CommentContents>
        <S.CommentBox>
          {props.conLength ? (
            <S.CommentLength>{props.conLength.length}/100</S.CommentLength>
          ) : (
            <S.CommentLength>0/100</S.CommentLength>
          )}
          <S.CommentButton isValid={props.formState.isValid}>
            {props.isEdit ? "수정" : "문의"}하기
          </S.CommentButton>
          <S.Error>{props.contentsError}</S.Error>
        </S.CommentBox>
      </S.Wrapper>
    </form>
  );
}
