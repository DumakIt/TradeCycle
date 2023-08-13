import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

interface IProps {
  select: boolean;
}

export const Container = styled.aside`
  width: 250px;
  padding: 10px 20px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    padding: 8px 0;
    font-size: 24px;
  }
`;

export const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid black;
  cursor: pointer;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const UserDefaultIcon = styled(UserOutlined)`
  font-size: 100px;
  text-align: center;
`;

export const Tab = styled.p`
  padding-top: 14px;
  text-align: center;
  font-size: 20px;
  text-decoration: ${(props: IProps) => (props.select ? "underline" : "none")};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
