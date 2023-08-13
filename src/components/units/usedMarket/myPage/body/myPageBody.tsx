import { useRouterMovePage } from "../../../../commons/hooks/custom/useRouterMovePage";
import BuyList from "./buyList/buyList";
import MyItemList from "./myItemList/myItemList";

export default function MyPageBody(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  return (
    <>
      {/* <MyItemList onClickMovePage={onClickMovePage} /> */}
      <BuyList onClickMovePage={onClickMovePage} />
    </>
  );
}
