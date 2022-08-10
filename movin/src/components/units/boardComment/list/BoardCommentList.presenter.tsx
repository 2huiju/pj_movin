import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { HeartOutlined } from "@ant-design/icons";
import BoardCommentWriteUI from "../Routing_Comment/BoardCommentRouting.container";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: any) {
  if (!props.data) return <div />;
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
        {props.data?.fetchBoardComments.map((el: any) => {
          if (props.EditId !== el._id)
            return (
              <S.Wrapper key={el._id}>
                <S.CommentWrapper>
                  <S.Avatar src="/freeboard_profile.svg" />
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
                    <S.EditIcon
                      src="/freeboard_pen.png"
                      id={el._id}
                      onClick={props.onClickToEdit}
                    />
                    <S.DeleteIcon
                      src="/delete.png"
                      id={el._id}
                      // onClick={props.onClickDelete}
                      onClick={props.onClickOpenDeleteModal}
                    />
                  </S.OptionWrapper>
                </S.CommentWrapper>
                <S.CreatTime>{getDate(el.createdAt)}</S.CreatTime>
              </S.Wrapper>
            );
          else {
            return (
              <>
                <BoardCommentWriteUI
                  isEdit={true}
                  setEditId={props.setEditId}
                  el={el}
                  data={props.data}
                  writer={el.writer}
                  contents={el.contents}
                  rating={el.rating}
                />
              </>
            );
          }
        })}
      </InfiniteScroll>
    </>
  );
}
