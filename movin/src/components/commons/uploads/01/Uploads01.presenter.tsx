import * as S from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <S.UploadWrapper>
      {props.fileUrl ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        // <S.UploadImg onClick={props.onClickUpload} src={`${props.fileUrl}`} />
        <S.UploadButton type="button" onClick={props.onClickUpload}>
          {/* +<br></br>Upload */}
          <div>+</div>
          <div>Upload</div>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </S.UploadWrapper>
  );
}
