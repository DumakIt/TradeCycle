import styled from "@emotion/styled";

interface IImgWrapperProps {
  isImg: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  min-width: 650px;
`;

export const WriteBtn = styled.button`
  width: 180px;
  height: 80px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 24px;
  color: white;
  background-color: black;
  cursor: pointer;
`;

export const ItemContainer = styled.section`
  gap: 50px 20px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  width: 300px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 5 / 5;
  background-color: ${(props: IImgWrapperProps) =>
    props.isImg ? "" : "#BDBDBD"};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContentsWrapper = styled.div`
  padding: 20px;

  & > div:first-of-type {
    font-size: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ContentsBottomWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  & > div:first-of-type {
    font-weight: 600;
    font-size: 28px;
  }

  & > div:last-of-type {
    color: #757575;
  }
`;
