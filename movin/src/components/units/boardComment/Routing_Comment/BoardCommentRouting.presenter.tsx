import * as S from "./BoardCommentRouting.styles";
import { HeartOutlined } from "@ant-design/icons";

export default function BoardCommentWriteUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.CommentWrapper>
          <S.CommentTitle>댓글</S.CommentTitle>
          <S.CommentHeader>
            <S.CommentWriter
              type="text"
              placeholder="작성자"
              onChange={props.onChangeName}
              defaultValue={props.el?.writer}
            ></S.CommentWriter>
            <S.Red>{props.writerError}</S.Red>
            <S.CommentPassword
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            ></S.CommentPassword>
            <br></br>
            <S.Red>{props.passwordError}</S.Red>
            <S.CommentStar>
              <S.Heart
                character={<HeartOutlined />}
                onChange={props.setRating}
                value={props.rating || props.el?.rating}
              />
            </S.CommentStar>
            <S.Red>{props.ratingError}</S.Red>
          </S.CommentHeader>
          <S.CommentWrite
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContent}
            defaultValue={props.el?.contents}
          ></S.CommentWrite>
          <S.CommentBoard>
            <S.CommentNumber>{props.contents.length}/100</S.CommentNumber>
            <S.CommentButton
              isActive={props.isActive === true || props.isActive === false}
              onClick={props.isEdit ? props.onClickEdit : props.onClickComment}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.CommentButton>
            <S.Red>{props.contentsError}</S.Red>
          </S.CommentBoard>
        </S.CommentWrapper>
      </S.Wrapper>
    </>
  );
}
