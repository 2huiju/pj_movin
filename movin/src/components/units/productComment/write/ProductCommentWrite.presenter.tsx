import * as S from "./ProductCommentWrite.styles";
import { FormOutlined } from "@ant-design/icons";
import { IProductCommentWriteUIProps } from "./ProductCommentWrite.types";

export default function ProductCommentWriteUI(
  props: IProductCommentWriteUIProps
) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdateComment : props.onClickComment
      )}
    >
      <S.Wrapper>
        <S.CommentTitleBox>
          <FormOutlined style={{ fontSize: "20px", color: "#ff3c8d" }} />
          <S.CommentTitle>문의하기</S.CommentTitle>
        </S.CommentTitleBox>
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
            {props.isEdit ? "수정" : "문의"}하기
          </S.CommentButton>
          <S.Error>{props.contentsError}</S.Error>
        </S.CommentBox>
      </S.Wrapper>
    </form>
  );
}
