import styled from "@emotion/styled";

export const CommentTextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 380px;
  height: 200px;
  padding: 10px;
  & > textarea {
    background: #e9e9e9;
    resize: none;
    border: none;
    width: 100%;
    height: 120px;
    font-weight: 400;
    font-size: 18px;
    padding: 10px;
    :focus {
      outline: none;
    }
  }

  @media (max-width: 1023px) {
    width: 100%;
    min-width: 650px;
  }
`;

export const CommentUpdateBtnWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 36px;
  width: 240px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentUpdateCanCel = styled.button`
  width: 116px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #000000;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const CommentUpdateSubmit = styled.button`
  width: 116px;
  height: 42px;
  background: black;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
