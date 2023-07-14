import {
  CloseOutlined,
  EditFilled,
  EnterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const ReplyWriteWrapper = styled.form`
  display: flex;
  flex-direction: row;
`;

export const ReplyEnter = styled(EnterOutlined)`
  margin-top: 20px;
  font-size: 32px;
  transform: scaleX(-1);
`;

export const ReplyWriteTextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 340px;
  height: 200px;
  margin-left: 10px;
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
  }
`;

export const ReplyWriteSubmit = styled.button`
  width: 116px;
  height: 42px;
  margin-top: 10px;
  background: black;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReplyDetailContainer = styled.div`
  width: 100%;
  margin-left: 20px;
  & > div {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 18px;
  }
`;

export const ReplyWriterInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    height: 100%;
    aspect-ratio: 1 / 1;
    margin-right: 16px;
  }
`;

export const ReplyWriterIconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid black;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ReplyWriterDefaultIcon = styled(UserOutlined)`
  font-size: 30px;
  text-align: center;
`;

export const ReplyWriterCreateAtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 10px;
`;

export const ReplyWriter = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 70%;
`;

export const ReplyCreateAt = styled.div`
  font-weight: 400;
  font-size: 15px;
`;

export const ReplyUpdateIcon = styled(EditFilled)`
  margin-right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

export const ReplyDeleteIcon = styled(CloseOutlined)`
  cursor: pointer;
  font-size: 24px;
`;

export const ReplyContents = styled.div`
  margin-top: 17px;
  padding: 0 6px 36px;
  font-weight: 400;
  font-size: 24px;
  word-break: break-all;
`;
