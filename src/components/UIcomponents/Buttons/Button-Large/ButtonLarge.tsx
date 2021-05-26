import * as React from "react";

import "./ButtonLarge.scss";

export interface IButtonLargeProps {
  textValue: string;
  onClick: () => void;
}

export default function ButtonLarge(props: IButtonLargeProps) {
  const { textValue } = props;

  const HandleClick = () => {
    props.onClick();
  };
  return (
    <button className="ButtonLarge" onClick={() => HandleClick()} type="button">
      <div>{textValue}</div>
    </button>
  );
}
