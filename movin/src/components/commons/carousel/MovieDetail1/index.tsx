import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export default function MovieDetailPage1(props: any) {
  return (
    <DetailBox onMouseLeave={props.onClickCancelDetail}>
      <Poster src="/Banner/Avatar/avatarposter.jpeg" />
      <TextWrapper>
        <Title>아바타2: 물의 길</Title>
        <EnTitle>Avatar: The Way of Water, 2022</EnTitle>
        <SubWrapper>
          <SubBox1>
            <SubText>개요</SubText>
            <SubText>감독</SubText>
            <SubText>출연</SubText>
          </SubBox1>
          <SubBox2>
            <SubText2>액션, 모험, 판타지, SF | 미국 | 2022.12 개봉</SubText2>
            <SubText2>제임스 카메론</SubText2>
            <SubText2>
              조 샐다나, 샘 워싱턴(제이크 설리), 시고니위버(그레이스 어거스틴)
            </SubText2>
          </SubBox2>
        </SubWrapper>
        <ImgWrapper>
          <CImg src="/Banner/Avatar/AvatarC2.jpeg" />
          <CImg src="/Banner/Avatar/AvatarC1.jpeg" />
          <CImg src="/Banner/Avatar/AvatarC3.jpeg" />
          <CImg src="/Banner/Avatar/AvatarC4.jpeg" />
        </ImgWrapper>
      </TextWrapper>
    </DetailBox>
  );
}

const DetailBox = styled.div`
  width: 800px;
  height: 400px;
  background-color: #ffffff;
  z-index: 5000;
  position: fixed;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  padding: 20px 10px 20px 20px;
  opacity: 0.8;

  @media ${breakPoints.tablet} {
    width: 700px;
    height: 300px;
    top: 33%;
  }

  @media ${breakPoints.mobile} {
    width: 400px;
    height: 200px;
    top: 25%;
  }
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

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const EnTitle = styled.div`
  font-weight: 300;
  font-size: 30px;
  margin-top: -15px;

  @media ${breakPoints.tablet} {
    font-size: 20px;
    font-weight: 400;
    margin-top: 0;
  }

  @media ${breakPoints.mobile} {
    font-size: 16px;
    font-weight: 400;
    margin-top: 0;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  padding-top: 15px;
`;

const SubBox1 = styled.div`
  width: 15%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const SubText = styled.div`
  margin-bottom: 15px;
`;

const SubBox2 = styled.div`
  width: 85%;
  font-weight: 300;
  font-size: 15px;
  line-height: 23px;
  margin-left: 5px;

  @media ${breakPoints.tablet} {
    margin-left: 0;
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    margin-left: 0;
    font-size: 13px;
    line-height: 15px;
  }
`;

const SubText2 = styled.div`
  margin-bottom: 15px;
`;

const ImgWrapper = styled.div`
  display: flex;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const CImg = styled.img`
  width: 100px;
  height: 120px;
  margin-right: 10px;

  @media ${breakPoints.tablet} {
    width: 80px;
    height: 100px;
  }
`;
