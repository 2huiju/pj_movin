import * as S from "./BoardCommentWrite.styles";
import { HeartOutlined, FormOutlined } from "@ant-design/icons";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWritePresenter(
  props: IBoardCommentWriteUIProps
) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickUploadComment)
      }
    >
      <S.Wrapper>
        <S.CommentTitleBox isEdit={props.isEdit}>
          <FormOutlined style={{ fontSize: "20px", color: "#ff3c8d" }} />
          {props.isEdit ? (
            <S.CommentTitle>댓글 수정</S.CommentTitle>
          ) : (
            <S.CommentTitle>댓글</S.CommentTitle>
          )}
        </S.CommentTitleBox>
        <S.CommentHeader>
          <S.CommentWriter
            type="text"
            placeholder="작성자"
            {...props.register("writer")}
            defaultValue={props.el?.writer}
          ></S.CommentWriter>
          <S.CommentPassword
            type="password"
            placeholder="비밀번호"
            {...props.register("password")}
          ></S.CommentPassword>
          <S.Heart
            character={<HeartOutlined />}
            onChange={props.setRating}
            value={props.rating || props.el?.rating}
          />
        </S.CommentHeader>
        <S.CommentErrorBox>
          <S.Error>{props.formState.errors.writer?.message}</S.Error>
          <S.PwdError>{props.formState.errors.password?.message}</S.PwdError>
        </S.CommentErrorBox>
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
          <S.CommentButton>
            {props.isEdit ? "수정" : "등록"}하기
          </S.CommentButton>
        </S.CommentBox>
        <S.Error>{props.formState.errors.contents?.message}</S.Error>
      </S.Wrapper>
    </form>
  );
}
