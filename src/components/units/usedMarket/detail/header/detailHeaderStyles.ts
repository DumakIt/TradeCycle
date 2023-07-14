import { CloseOutlined, EditFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

interface IImgWrapperProps {
  isImg: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  min-width: 650px;
  margin: 70px auto 0;
  padding: 10px;
`;

export const ImgWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props: IImgWrapperProps) =>
    props.isImg ? "" : "#BDBDBD"};
  & > img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
`;

export const ItemInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 400px);
  min-width: 50%;
  padding: 35px 0 0 70px;
`;

export const FuncBtnBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ItemBtnUpdate = styled(EditFilled)`
  margin-right: 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const ItemBtnDelete = styled(CloseOutlined)`
  cursor: pointer;
  font-size: 24px;
`;

export const ItemName = styled.div`
  padding: 5px;
  font-weight: 700;
  font-size: 24px;
`;

export const ItemPrice = styled.div`
  padding: 5px;
  margin-bottom: 80px;
  font-weight: 500;
  font-size: 40px;
  border-bottom: 1px solid #c0c0c0;
  & > span {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const BuyBtnBox = styled.div`
  display: flex;
  flex-direction: row-reverse;

  & > button {
    width: 300px;
    height: 100px;
    background: #000000;
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    border: none;
  }
`;
