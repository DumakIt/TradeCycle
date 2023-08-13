import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

interface IProps {
  isScroll?: boolean;
  istoggle?: string;
}

export const HeaderContainer = styled.header`
  height: 70px;
  min-width: 650px;
  background-color: black;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1600px;
    min-width: 650px;
    height: 100%;
    margin: 0 auto;
    padding-right: 20px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  cursor: pointer;
  & > img {
    height: 100%;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: white;

  & > span:first-of-type {
    font-weight: 700;
    text-decoration: underline;
  }

  & > span:last-of-type {
    font-weight: 700;
  }
`;

export const Func = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const FuncWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
`;

export const ScrollHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 70px;
  min-width: 650px;
  margin-top: 20px;
  background-color: ${(props: IProps) =>
    props.isScroll === true ? "black" : "white"};

  & > div:first-of-type {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1600px;
    height: 100%;
    margin: 0 auto;
    padding-right: 0 20px;
  }

  & > div > div:first-of-type {
    visibility: ${(props: IProps) =>
      props.isScroll === true ? "visible" : "hidden"};
  }
`;

export const SearchBox = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: ${(props) => (props.istoggle === "true" ? "300px" : "60px")};
  height: 60px;
  padding: 0 15px;
  border: 2px solid black;
  border-radius: 60px;
  cursor: pointer;
  background-color: ${(props) =>
    props.istoggle === "true" ? "white" : "black"};

  transition: ${(props) =>
    props.isScroll === true ? "width 0.7s ease" : "width 0.7s ease"};
`;

export const SearchBoxInput = styled.input<IProps>`
  display: ${(props) => (props.istoggle === "true" ? "block" : "none")};
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const CustomSearchOutlined = styled(SearchOutlined)<IProps>`
  margin-left: 10px;
  color: ${(props) => (props.istoggle === "true" ? "black" : "white")};
  font-size: 30px;
`;
