import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Container = styled.div`
  max-width: 1200px;
  min-width: 650px;
  margin: 70px auto 0;
  padding: 0 10px;
`;

export const ContainerTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const Line = styled.div`
  border-bottom: 3px solid #555555;
  margin: 42px 0 40px;
`;

export const inValidInputs = styled.div`
  height: 20px;
  font-weight: 400;
  font-size: 16px;
  color: #ef3030;
  margin: 15px 0 24px 130px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputsTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

export const Inputs = styled.input`
  width: calc(100% - 120px);
  height: 56px;
  background: #e9e9e9;
  font-size: 16px;
  border: none;
  padding: 20px;

  &:focus {
    outline: none;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.div`
  padding-top: 7px;
  font-weight: 500;
  font-size: 24px;
`;

export const CustomReactQuill = styled(ReactQuill)`
  width: calc(100% - 120px);
  height: 390px;

  & > div:last-of-type {
    height: 348px;
    font-size: 16px;
  }
`;

export const ImgContainer = styled.div`
  margin-top: 39px;
`;

export const ImgTitle = styled.div`
  margin-top: 48px;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 34px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomLine = styled.div`
  border-bottom: 3px solid #555555;
  margin: 45px 0 72px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 84px;
`;

export const BtnCancel = styled.button`
  width: 194px;
  height: 78px;
  background: white;
  border: 1px solid black;
  font-weight: 700;
  font-size: 20px;
  line-height: 78px;
  text-align: center;
  margin-right: 16px;
  cursor: pointer;
`;

export const BtnSubmit = styled.button`
  width: 194px;
  height: 78px;
  font-weight: 700;
  font-size: 20px;
  background: #000000;
  color: #ffffff;
  border: none;
  line-height: 78px;
  text-align: center;
  cursor: pointer;
`;
