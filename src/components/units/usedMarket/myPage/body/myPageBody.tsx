import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import BuyList from "./buyList/buyList";
import MyItemList from "./myItemList/myItemList";

interface IMyPageBodyProps {
  isActive: string;
}

export default function MyPageBody(props: IMyPageBodyProps): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  return (
    <>
      {props.isActive === "myItemList" && (
        <MyItemList onClickMovePage={onClickMovePage} />
      )}
      {props.isActive === "buyList" && (
        <BuyList onClickMovePage={onClickMovePage} />
      )}
    </>
  );
}
