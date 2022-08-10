import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardCommentWriteUI from "./BoardCommentRouting.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentRouting.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { Modal } from "antd";
import {
  IBoardCommentWriteUIProps,
  IUpdateBoardCommentInput,
} from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteUIProps) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [isActive, setIsActive] = useState(false);

  const [writer, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const [writerError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsError, setContentError] = useState("");
  // const [ratingError, setRatingError] = useState("");

  //댓글 패치해서 받아오기
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    //요청이 날아감(비어있는 상태 undefined)
    variables: { boardId: router.query.Board },
    //해당 게시글의 아이디로 댓글 목록을 불러오기
    //    ↑ gql에서 지정하는 값
  });

  //댓글 작성자,비밀번호,내용, rating
  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }

    if (event.target.value && password && contents) {
      setIsActive(true);
    } else setIsActive(false);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (event.target.value && writer && contents) {
      setIsActive(true);
    } else setIsActive(false);
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }

    if (event.target.value && writer && password) {
      setIsActive(true);
    } else setIsActive(false);
  }

  //댓글작성하기
  const onClickComment = async () => {
    if (writer === "") {
      setNameError("작성자를 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (contents === "") {
      setContentError("내용을 입력해주세요");
    }
    if (writer !== "" && password !== "" && contents !== "") {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: Number(rating),
            },
            boardId: router.query.Board,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.Board },
            },
          ],
        });
        console.log(router.query.Board);
        console.log(rating);
        Modal.success({
          content: "댓글 작성이 완료되었습니다!",
        });
        // alert("댓글 작성이 완료되었습니다!");
      } catch (error: any) {
        console.log(error);
        Modal.error({
          content: error.message,
        });
        // alert(error.message);
      }
    }
    // setData(result.data.createBoardInput.message)
  };

  //댓글 수정하기
  const onClickEdit = async (event: any) => {
    // const EditVariables = { boardId: router.query.Board };
    // props.EditId(event.currentTarget.id);
    console.log(props.el._id);
    console.log(props.isEdit);
    console.log(props.el.contents);
    console.log(props.el.rating);

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (!contents) {
      setContentError("수정된 내용이 없습니다");
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (rating) updateBoardCommentInput.rating = rating;

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setEditId("");
      Modal.success({
        content: "댓글이 수정되었습니다!",
      });
    } catch (error: any) {
      console.log(error);
      Modal.error({
        content: error.message,
      });
      // alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onClickComment={onClickComment}
      onClickEdit={onClickEdit}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeContent={onChangeContent}
      contents={contents}
      rating={rating}
      setRating={setRating}
      writer={writer}
      isActive={isActive}
      data={data}
      isEdit={props.isEdit}
      el={props.el}
      writerError={writerError}
      passwordError={passwordError}
      contentsError={contentsError}
      // ratingError={ratingError}
    />
  );
}
