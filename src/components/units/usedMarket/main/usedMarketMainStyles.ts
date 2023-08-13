import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  min-width: 650px;
`;

export const GrayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 800px;
  padding: 0 60px 0 140px;
  background: #f9f9f9;

  & > div {
    min-width: 405px;

    @media (max-width: 1023px) {
      min-width: 250px;
    }
  }

  @media (max-width: 1023px) {
    padding: 0 10px 0 50px;
    height: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;

  @media (max-width: 1023px) {
    font-size: 38px;
  }
`;

export const Text = styled.p`
  padding-top: 36px;
  font-size: 18px;

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const FirstSecondImg = styled.img`
  width: 55%;
  object-fit: contain;
`;

export const WhiteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 800px;
  padding: 0 140px 0 60px;
  background: #ffffff;

  & > div {
    min-width: 460px;

    @media (max-width: 1023px) {
      min-width: 300px;
    }
  }

  @media (max-width: 1023px) {
    padding: 0 50px 0 0px;
    height: 400px;
  }
`;

export const ThirdImg = styled.img`
  width: 45%;
  margin-right: 110px;
  object-fit: contain;

  @media (max-width: 1023px) {
    margin-right: 10px;
  }
`;

export const ListBtn = styled.a`
  display: block;
  width: 180px;
  height: 60px;
  margin-top: 10px;
  text-align: center;
  line-height: 60px;
  border-radius: 8px;
  border: 3px solid black;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
