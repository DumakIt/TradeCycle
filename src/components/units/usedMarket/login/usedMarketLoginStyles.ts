import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 650px;
  & > div {
    max-width: 600px;
    margin: 0 auto;
    padding: 72px 0;
  }
`;

export const LoginTitle = styled.div`
  font-weight: 700;
  font-size: 50px;

  & > span {
    margin-left: 12.41px;
    font-weight: 400;
    font-size: 32px;
  }
`;

export const Line = styled.div`
  margin: 32px 0 72px;
  border-top: 1px solid #c9c9c9;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const EmailPasswordInput = styled.input`
  width: 100%;
  height: 78px;
  margin-bottom: 12px;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-weight: 400;
  font-size: 18px;
`;

export const inValidInput = styled.div`
  padding-left: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #ef3030;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const LoginBtn = styled.button`
  border: none;
  width: 100%;
  height: 88px;
  margin-bottom: 40px;
  background: black;
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const RegWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  color: #888888;

  & > span {
    margin-left: 21px;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
  }
`;
