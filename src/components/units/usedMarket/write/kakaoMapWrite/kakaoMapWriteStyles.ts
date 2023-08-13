import styled from "@emotion/styled";

export const Title = styled.div`
  padding-top: 7px;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 34px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const KeywordInput = styled.input`
  width: 250px;
  height: 56px;
  padding: 20px;
  font-size: 16px;
  border: 1px solid #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  width: 100px;
  height: 56px;
  margin-left: 15px;
  color: white;
  font-size: 16px;
  border: none;
  background-color: black;
`;

export const AddressWrapper = styled.div`
  padding: 26px 0 26px 26px;
  width: 100%;
  & > input:last-of-type {
    margin-top: 24px;
  }
`;

export const AddressSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  margin-right: 16px;
  border: none;
  font-size: 15px;
  background: #e9e9e9;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const AddressSearchBtn = styled.button`
  width: 124px;
  height: 51px;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border: none;
`;

export const AddressDetail = styled.input`
  padding: 0 19px;
  height: 56px;
  width: 100%;
  border: none;
  font-size: 15px;
  background: #e9e9e9;
  &:focus {
    outline: none;
  }
`;
