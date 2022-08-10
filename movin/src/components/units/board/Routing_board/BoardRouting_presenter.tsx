import * as S from "./BoardRouting_styles";
import { IBoardWriteUIProps } from "./BoardRouting_types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardRoutingUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.InputName
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeName}
            defaultValue={props.boardData?.fetchBoard.writer}
          ></S.InputName>
          <S.Red>{props.writerError}</S.Red>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.InputName
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          ></S.InputName>
          <S.Red>{props.passwordError}</S.Red>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.InputTitle
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={props.onChangeTitle}
          defaultValue={props.boardData?.fetchBoard.title}
        ></S.InputTitle>
        <S.Red>{props.titleError}</S.Red>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.InputContent
          placeholder="내용을 작성해주세요"
          onChange={props.onChangeContent}
          defaultValue={props.boardData?.fetchBoard.contents}
        ></S.InputContent>
        <S.Red>{props.contentError}</S.Red>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.NumberWrapper>
          <S.NumberCode
            readOnly
            placeholder="07250"
            value={
              props.zipcode || props.boardData?.fetchBoard.boardAddress?.zipcode
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
          <S.NumberButton onClick={props.showModal}>
            우편번호 검색
          </S.NumberButton>
        </S.NumberWrapper>
        <S.Address1
          readOnly
          value={
            props.address || props.boardData?.fetchBoard.boardAddress?.address
          }
        ></S.Address1>
        <S.Address2
          onChange={props.onChangeaddressDetail}
          placeholder="나머지 주소를 입력해주세요"
          defaultValue={props.boardData?.fetchBoard.boardAddress?.addressDetail}
        ></S.Address2>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.InputYoutube
          type="text"
          placeholder="링크를 복사해주세요"
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.boardData?.fetchBoard.youtubeUrl}
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
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSignup}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.SubmitButton>
        {/* <div>{data}</div> */}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
