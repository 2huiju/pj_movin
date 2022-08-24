import * as M from "./MyPageHeartMovie.Styles";
import { HeartTwoTone } from "@ant-design/icons";
import { IMyPageHeartMoviePresenterProps } from "./MyPageHeartMovie.types";

export default function MyPageHeartMoviePresenter(
  props: IMyPageHeartMoviePresenterProps
) {
  return (
    <M.Wrapper>
      <M.Title>내가 찜한 영화</M.Title>
      <M.GridWrap>
        {props.heartMovie.map((el: any) => (
          <>
            <M.ItemWrap key={el.id}>
              <M.RowWrap>
                <M.AwardWrap>
                  <M.MovieTitle>{el.title}</M.MovieTitle>
                </M.AwardWrap>
                <M.PickedWrap>
                  <M.PickedTitle>찜 취소</M.PickedTitle>
                  <HeartTwoTone
                    onClick={props.onClickCancelHeart(el)}
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    twoToneColor="#ff3c8d"
                  />
                </M.PickedWrap>
              </M.RowWrap>
              <M.ItemBox>
                <M.ItemPic
                  src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                />
                <M.TextWrap>
                  <M.Overview>{el.overview}</M.Overview>
                </M.TextWrap>
              </M.ItemBox>
            </M.ItemWrap>
          </>
        ))}
      </M.GridWrap>
    </M.Wrapper>
  );
}
