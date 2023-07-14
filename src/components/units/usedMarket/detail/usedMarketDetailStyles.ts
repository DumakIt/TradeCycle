import styled from "@emotion/styled";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 80px auto 0;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  margin: 0 30px;
  border-left: 1px solid #555555;

  @media (max-width: 1023px) {
    display: none;
  }
`;
