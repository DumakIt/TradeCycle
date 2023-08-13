import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 10px;

  & > p {
    font-size: 18px;
  }

  & > p:nth-of-type(1) {
    width: 8%;
    text-align: center;
  }

  & > p:nth-of-type(2) {
    width: 65%;
    text-align: center;
  }

  & > p:nth-of-type(3) {
    width: 20%;
    text-align: center;
  }

  & > p:nth-of-type(4) {
    width: 12%;
    text-align: center;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 10px;
  border-top: 1px solid black;
  cursor: pointer;

  &:hover > p:nth-of-type(2) {
    text-decoration: underline;
  }

  & > p:nth-of-type(1) {
    width: 8%;
    text-align: center;
  }

  & > p:nth-of-type(2) {
    width: 65%;
    text-align: center;
  }

  & > p:nth-of-type(3) {
    width: 20%;
    text-align: center;
  }

  & > p:nth-of-type(4) {
    width: 12%;
    text-align: center;
  }
`;
