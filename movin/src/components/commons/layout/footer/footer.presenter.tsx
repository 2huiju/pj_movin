import TopButton from "../../buttons/TopButton";
import * as F from "./footer.styles";

export default function FooterPresenter() {
  return (
    <>
      <F.Wrapper>
        <TopButton />
        <F.WrapperBox>
          <F.LeftBox>
            <F.Notice>공지사항</F.Notice>
            {/* d */}
            <F.Title>(주)MOVIN 사업자 정보</F.Title>
            <F.Contents>
              사업자 등록번호 000 - 00 - 00000 | 통신판매업신고번호
              2000-서울강남-00000 | 대표자명 이희주
              <br />
              주소 : 서울특별시 구로구 디지털로 300 지밸리 13F | 연락처 : 02 -
              000 - 0000
            </F.Contents>
            <F.Corp>ⓒ MOVIN Corp.</F.Corp>
          </F.LeftBox>
          <F.RightBox>
            <F.RightSubBox>
              <F.SNSButton src="/footer/facebook.png"></F.SNSButton>
            </F.RightSubBox>
            <F.Title>MOVIN 고객센터</F.Title>
            <F.RightSubBox>
              <F.Number>0000-0000</F.Number>
            </F.RightSubBox>
            <F.Contents2>
              평일 10:00~17:00 | 점심시간 12:30~14:00
              <br />
              주말 및 공휴일 휴무
            </F.Contents2>
          </F.RightBox>
        </F.WrapperBox>
      </F.Wrapper>
    </>
  );
}
