import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 650px;
  & > div {
    max-width: 600px;
    margin: 0 auto;
    padding: 72px 0;
  }
`;

export const SignUpTitle = styled.div`
  font-weight: 700;
  font-size: 50px;

  & > span {
    margin-left: 12px;
    font-weight: 400;
    font-size: 32px;
  }
`;

export const Line = styled.div`
  margin: 30px 0 70px;
  border-top: 1px solid #c9c9c9;
`;

export const InputsWrapper = styled.div`
  margin-bottom: 10px;
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputsTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
`;

export const Inputs = styled.input`
  height: 64px;
  width: calc(100% - 216px);
  padding: 0 20px;
  background: #f6f6f6;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
`;

export const inValidInputs = styled.div`
  height: 18px;
  margin: 10px 0 0 225px;
  font-weight: 400;
  font-size: 16px;
  color: #ef3030;
`;

export const SignUpBtn = styled.button`
  width: 100%;
  height: 70px;
  margin-bottom: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  color: #888888;

  & > span {
    margin-left: 20px;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
  }
`;
