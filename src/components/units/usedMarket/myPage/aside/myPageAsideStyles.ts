import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

interface IProps {
  select?: boolean;
}

export const Container = styled.aside`
  min-width: 250px;

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1023px) {
    & > div:last-of-type {
      flex-direction: row;
      justify-content: space-between;
      width: 250px;
    }
  }
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
  width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid black;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & > input {
    display: none;
  }
`;

export const UserDefaultIcon = styled(UserOutlined)`
  font-size: 100px;
  text-align: center;
`;

export const Tab = styled.p`
  padding: 10px 0;
  font-size: 20px;
  text-decoration: ${(props: IProps) => (props.select ? "underline" : "none")};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
