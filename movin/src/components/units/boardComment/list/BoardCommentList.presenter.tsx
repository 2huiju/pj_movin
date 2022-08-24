import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { HeartOutlined, DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import BoardCommentWritePresenter from "../write/BoardCommentWrite.presenter";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
        {props.data?.fetchBoardComments.map((el: any) => {
          if (props.EditId !== el._id)
            return (
              <S.Wrapper key={el._id}>
                <S.CommentWrapper>
                  <S.RowBox>
                    <S.Avatar src="/commons/profile.svg" />
                    <S.MainWrapper>
                      <S.WriterWrapper>
                        <S.Writer>{el.writer}</S.Writer>
                        <S.Contents>{el.contents}</S.Contents>
                      </S.WriterWrapper>
                      <S.Heart
                        character={<HeartOutlined />}
                        value={el.rating}
                      ></S.Heart>
                    </S.MainWrapper>
                    <S.OptionWrapper>
                      <EditTwoTone
                        twoToneColor="#eb2f96"
                        id={el._id}
                        onClick={props.onClickToEdit}
                        style={{
                          fontSize: "20px",
                          marginRight: "10px",
                          marginTop: "1px",
                        }}
                      />
                      <DeleteTwoTone
                        twoToneColor="#eb2f96"
                        id={el._id}
                        onClick={props.onClickOpenDeleteModal}
                        style={{ fontSize: "21px" }}
                      />
                    </S.OptionWrapper>
                  </S.RowBox>
                  <S.CreateTime>{getDate(el.createdAt)}</S.CreateTime>
                </S.CommentWrapper>
              </S.Wrapper>
            );
          else {
            return (
              <>
                <BoardCommentWritePresenter
                  isEdit={true}
                  setEditId={props.setEditId}
                  el={el}
                  data={props.data}
                />
              </>
            );
          }
        })}
      </InfiniteScroll>
    </>
  );
}
