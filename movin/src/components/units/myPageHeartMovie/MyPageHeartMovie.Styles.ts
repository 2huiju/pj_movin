import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 10px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding-bottom: 30px;
`;

export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  justify-content: flex-start;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    margin: 0px 10px;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 10px;
  }
`;

export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 10px 30px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const AwardWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${breakPoints.mobile} {
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const MovieTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;

  @media ${breakPoints.tablet} {
    margin-right: 50px;
  }

  @media ${breakPoints.mobile} {
    font-size: 2em;
    margin: 10px 20px 0;
    text-align: center;
  }
`;

export const PickedWrap = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PickedTitle = styled.div`
  font-size: 0.7rem;
  color: #808080;
`;

export const ItemWrap = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 48%;
  margin: 2% 1%;
  padding: 0 3px;
  overflow: hidden;
  cursor: pointer;

  border: 1px solid #bdbdbd;
  border-radius: 30px;

  @media (min-width: 768px) and (max-width: 990px) {
    transition-duration: 1s;
    flex-basis: 46%;
    margin: 2%;
  }

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    flex-basis: 96%;
    margin: 2%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    flex-basis: 96%;
    margin: 2%;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 30px 20px 30px;

  @media (min-width: 768px) and (max-width: 1060px) {
    transition-duration: 1s;
    padding: 20px 10px 20px 30px;
  }

  @media ${breakPoints.tablet} {
    flex-direction: row;
    /* width: 96%; */
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 30px 20px;
  }
`;

export const ItemPic = styled.img`
  width: 30%;
  height: 210px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 8px;
  vertical-align: middle;

  @media ${breakPoints.tablet} {
    width: 50%;
    height: 10%;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
    height: 500px;
  }
`;

export const TextWrap = styled.div`
  width: 98%;
  padding: 0px 10px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${breakPoints.mobile} {
    padding-top: 10px;
  }
`;

export const Overview = styled.div`
  font-size: 0.88rem;
  color: #808080;
`;
