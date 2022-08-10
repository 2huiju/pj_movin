import * as S from "./pagination_styles";

export default function Paginations01UI(props: any) {
  return (
    <S.Wrapper>
      <S.Button
        src="/paginations/arrowLeft.png"
        onClick={props.onClickPrevPage}
      />
      {new Array(10).fill(1).map(
        (el, index) =>
          index + props.startPage <= props.lastPage && (
            <S.PageSpan
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={props.startPage + index === props.activedPage}
            >
              {index + props.startPage}
            </S.PageSpan>
          )
      )}
      <S.Button
        src="/paginations/arrowRight.png"
        onClick={props.onClickNextPage}
      />
    </S.Wrapper>
  );
}
