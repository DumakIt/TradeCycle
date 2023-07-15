import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
`;

export const GrayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 800px;
  padding: 0 60px 0 140px;
  background: #f9f9f9;
`;

export const Title = styled.h1`
  font-size: 64px;
`;

export const Text = styled.p`
  padding-top: 36px;
  font-size: 18px;
`;

export const FirstSecondImg = styled.img`
  width: 850px;
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
`;

export const ThirdImg = styled.img`
  width: 600px;
  margin-right: 130px;
  object-fit: contain;
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
