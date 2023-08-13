import { CloseOutlined, EditFilled, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const CommentWriterInfoContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;
`;

export const CommentWriterInfoWrapper = styled.div`
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

export const CommentWriterIconBox = styled.div`
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

export const CommentWriterDefaultIcon = styled(UserOutlined)`
  font-size: 30px;
  text-align: center;
`;

export const CommentWriterCreateAtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 10px;
`;

export const CommentWriter = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 70%;
`;

export const CommentCreateAt = styled.div`
  font-weight: 400;
  font-size: 15px;
`;

export const CommentUpdateIcon = styled(EditFilled)`
  margin-right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

export const CommentDeleteIcon = styled(CloseOutlined)`
  cursor: pointer;
  font-size: 24px;
`;

export const CommentContents = styled.div`
  margin-top: 17px;
  padding: 0 6px 36px;
  font-weight: 400;
  font-size: 24px;
  word-break: break-all;
`;
