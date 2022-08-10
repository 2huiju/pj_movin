import styled from "@emotion/styled";

export default function MovieDetailPage2() {
  return (
    <DetailBox>
      <Poster src="/Banner/Avengers/poster.jpeg" />
      <TextWrapper>
        <Title>어벤져스: 엔드게임</Title>
        <EnTitle>Avengers: Endgame, 2019</EnTitle>
        <SubWrapper>
          <SubBox1>
            <SubText>개요</SubText>
            <SubText>감독</SubText>
            <SubText>출연</SubText>
          </SubBox1>
          <SubBox2>
            <SubText2>액션, SF | 미국 | 181분 | 2019.04.24 개봉</SubText2>
            <SubText2>안소니 루소, 조 루소</SubText2>
            <SubText2>
              로버트 다우니 주니어(토니 스타크), 크리스 에반스(스티브 로저스)
            </SubText2>
          </SubBox2>
        </SubWrapper>
        <ImgWrapper>
          <CImg src="/Banner/Avengers/C1.jpeg" />
          <CImg src="/Banner/Avengers/C2.jpeg" />
          <CImg src="/Banner/Avengers/C3.jpeg" />
          <CImg src="/Banner/Avengers/C4.jpeg" />
        </ImgWrapper>
      </TextWrapper>
    </DetailBox>
  );
}

const DetailBox = styled.div`
  width: 800px;
  height: 400px;
  position: absolute;
  background-color: #ffffff;
  z-index: 100;
  margin-left: 600px;
  margin-bottom: 35px;
  display: flex;
  padding: 20px 0 20px 20px;
  opacity: 0.8;
`;

const Poster = styled.img`
  width: 30%;
`;

const TextWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 50px;
`;

const EnTitle = styled.div`
  font-weight: 300;
  font-size: 30px;
  margin-top: -15px;
`;

const SubWrapper = styled.div`
  display: flex;
  padding-top: 15px;
`;

const SubBox1 = styled.div`
  width: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;

const SubText = styled.div`
  margin-bottom: 15px;
`;

const SubBox2 = styled.div`
  width: 700px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 23px;
  margin-left: 5px;
`;

const SubText2 = styled.div`
  margin-bottom: 15px;
`;

const ImgWrapper = styled.div`
  display: flex;
`;

const CImg = styled.img`
  width: 100px;
  height: 120px;
  margin-right: 10px;
`;
