import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Tags from "../../../commons/tags";
import MapPageWrite from "../../../commons/map/productWrite";
import { IProductWriteUIProps } from "./ProductWrite.types";

// react-quill을 dynamic import 할건데, 서버사이드에서는 import 하지 않겠다 ! 라고 하는것

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdateItem : props.onClickUploadItem
      )}
    >
      <S.Wrapper>
        <S.Title>상품 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.WriterWrapper>
          <S.SubWrapper>
            <S.InputWrapper>
              <S.InputTitle>상품명</S.InputTitle>
              <S.InputBox
                type="text"
                placeholder="상품명을 작성해주세요"
                {...props.register("name")}
                defaultValue={props.fetchData?.fetchUseditem.name}
              ></S.InputBox>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputTitle>상품 요약</S.InputTitle>
              <S.InputBox
                type="text"
                placeholder="상품을 한줄로 요약해주세요"
                {...props.register("remarks")}
                defaultValue={props.fetchData?.fetchUseditem.remarks}
              ></S.InputBox>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputTitle>상품 내용</S.InputTitle>
              <S.InputContents
                placeholder="상품을 설명해주세요"
                onChange={props.onChangeContents}
                defaultValue={props.fetchData?.fetchUseditem.contents}
              ></S.InputContents>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputTitle>판매 가격</S.InputTitle>
              <S.InputBox
                type="text"
                placeholder="판매 가격을 입력해주세요"
                {...props.register("price")}
                defaultValue={props.fetchData?.fetchUseditem.price}
              ></S.InputBox>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputTitle>태그 입력</S.InputTitle>
              <Tags tags={props.tags} setTags={props.setTags} />
            </S.InputWrapper>
          </S.SubWrapper>
        </S.WriterWrapper>
        <S.InputTitle>거래 위치</S.InputTitle>
        <S.RadioWrapper>
          <MapPageWrite
            Address={props.Address}
            setLat={props.setLat}
            setLng={props.setLng}
          />
          <S.MapWrapper2>
            <S.Label>GPS</S.Label>
            <S.GPSWrapper>
              <S.InputName2
                type="text"
                readOnly
                placeholder="위도(LAT)"
                value={props.La.toFixed(4)}
              ></S.InputName2>
              <S.InputName2
                type="text"
                readOnly
                placeholder="경도(LNG)"
                value={props.Ln.toFixed(4)}
              ></S.InputName2>
            </S.GPSWrapper>
            <S.Label>주소</S.Label>
            <S.InputBox2
              type="text"
              value={
                props.fetchData?.fetchUseditem.useditemAddress.address ||
                props.Address
              }
              onClick={props.showModal}
              {...props.register("address")}
              defaultValue={
                props.fetchData?.fetchUseditem.useditemAddress.address
              }
            />
            {/* <div>{props.Address}</div> */}
            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
            <S.InputBox2
              type="text"
              {...props.register("addressDatail")}
              defaultValue={
                props.fetchData?.fetchUseditem.useditemAddress.addressDetail
              }
            />
          </S.MapWrapper2>
        </S.RadioWrapper>
        {/* 우편번호 : <input type="text" {...props.register("zipcode")} /> */}{" "}
        <S.InputTitle>사진첨부</S.InputTitle>
        <S.UploadBox>
          {props.fileUrls.map((el: any, index: any) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.UploadBox>
        <S.ButtonWrapper>
          <S.SubmitButton2 type="button" onClick={props.onClickCancel}>
            취소
          </S.SubmitButton2>
          <S.SubmitButton>{props.isEdit ? "수정" : "등록"}</S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
