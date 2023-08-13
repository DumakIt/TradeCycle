import { CloseOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

interface IProps {
  amount: string;
}

export const CloseIcon = styled(CloseOutlined)`
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

export const ChargePointTitle = styled.div`
  margin-top: 56px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const SelectPointBtnWrapper = styled.div`
  margin-top: 43px;
  height: 38px;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 8px;
  cursor: pointer;
`;

export const SelectedPoint = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props: IProps) => (props.amount !== "" ? "black" : "#828282")};
`;

export const DownIcon = styled(DownOutlined)`
  font-size: 20px;
  line-height: 38px;
`;

export const UpIcon = styled(UpOutlined)`
  font-size: 20px;
  line-height: 38px;
`;

export const ChargeBtn = styled.button`
  width: 100%;
  height: 52px;
  background: ${(props: IProps) =>
    props.amount !== "" ? "#000000" : "#bdbdbd"};
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin-top: 40.5px;
  margin-bottom: 20.5px;
  cursor: pointer;
`;

export const SelectBoxContainer = styled.div`
  margin-top: 17px;
  position: relative;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const PointList = styled.div`
  padding: 0 16px;
  height: 52px;
  font-weight: 700;
  font-size: 16px;
  line-height: 52px;
  border-bottom: 1px solid #e0e0e0;
  color: #e0e0e0;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
