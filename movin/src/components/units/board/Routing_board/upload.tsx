import styled from "@emotion/styled";

export function Upload01UI(props: any) {
  const UploadButton = styled.button`
    width: 78px;
    height: 78px;
    margin: 5px 20px 40px 0px;
    background-color: #bdbdbd;
    border: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
  `;

  const UploadImg = styled.img`
    width: 78px;
    height: 78px;
    margin: 5px 20px 40px 0px;
  `;

  return (
    <>
      {props.imageUrl ? (
        <UploadImg src={`https://storage.googleapis.com/${props.imageUrl}`} />
      ) : (
        <UploadButton
          key={`${props.data}_${props.index}`}
          index={props.index}
          onClick={props.onClickImage}
        >
          +<br></br>Upload
        </UploadButton>
      )}
    </>
  );
}
