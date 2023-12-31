import UsedMarketLayout from "./usedMarket/usedMarketLayout";

interface ILayoutPros {
  children: JSX.Element;
}

export default function Layout(props: ILayoutPros): JSX.Element {
  return (
    <>
      <UsedMarketLayout />
      {props.children}
    </>
  );
}
