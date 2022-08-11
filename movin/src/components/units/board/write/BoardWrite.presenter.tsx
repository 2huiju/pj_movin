import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWirte.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

const ToastUi = dynamic(() => import("../../../commons/toastUI"), {
  ssr: false,
});

export default function BoardRoutingUI(props: IBoardWriteUIProps) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickUploadBoard)
      }
    >
      <S.Wrapper>
        <S.HeadTitle>게시물 {props.isEdit ? "수정" : "등록"}</S.HeadTitle>
        <S.WriterPwdBox>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.InputWriterPwd
              type="text"
              placeholder="이름을 입력해주세요"
              defaultValue={props.boardData?.fetchBoard.writer}
              {...props.register("writer")}
            ></S.InputWriterPwd>
            <S.Error>{props.formState.errors.writer?.message}</S.Error>
          </S.InputWrapper>
          <S.SpaceDiv></S.SpaceDiv>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.InputWriterPwd
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...props.register("password")}
            ></S.InputWriterPwd>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterPwdBox>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.InputTitle
            type="text"
            placeholder="제목을 작성해주세요"
            defaultValue={props.boardData?.fetchBoard.title}
            {...props.register("title")}
          ></S.InputTitle>
          <S.Error>{props.formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <ToastUi
            onChangeContents={props.onChangeContents}
            editorRef={props.editorRef}
            initialValue={props.boardData?.fetchBoard.contents}
          />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.NumberWrapper>
            <S.NumberCode
              readOnly
              placeholder="07250"
              value={
                props.zipcode ||
                props.boardData?.fetchBoard.boardAddress?.zipcode
              }
            ></S.NumberCode>
            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
            <S.NumberButton type="button" onClick={props.showModal}>
              우편번호 검색
            </S.NumberButton>
          </S.NumberWrapper>
          <S.Address
            readOnly
            value={
              props.address || props.boardData?.fetchBoard.boardAddress?.address
            }
          ></S.Address>
          <S.AddressDetail
            onChange={props.onChangeAddressDetail}
            placeholder="나머지 주소를 입력해주세요"
            defaultValue={
              props.boardData?.fetchBoard.boardAddress?.addressDetail
            }
          ></S.AddressDetail>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.InputYoutube
            type="text"
            placeholder="링크를 복사해주세요"
            defaultValue={props.boardData?.fetchBoard.youtubeUrl}
            {...props.register("youtubeUrl")}
          ></S.InputYoutube>
        </S.InputWrapper>
        <S.Label>사진첨부</S.Label>
        <S.UploadWrapper>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.UploadWrapper>
        <S.RadioWrapper>
          <S.Label>메인 설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.RadioWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            isActive={props.isActive || props.isEdit}
            onClick={
              props.isEdit ? props.onClickUpdate : props.onClickUploadBoard
            }
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
