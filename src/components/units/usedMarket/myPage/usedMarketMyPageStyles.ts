import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  min-width: 650px;
  margin: 80px auto 0;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  margin-left: 20px;
  margin-right: 40px;
  border-left: 1px solid black;
`;
