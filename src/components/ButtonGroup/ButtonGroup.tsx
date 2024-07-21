import React from "react";
import "./ButtonGroup.scss";

export interface ButtonGroupI {
  segmented?: boolean;
  children: React.ReactNode;
}

const ButtonGroup = ({
  segmented = true,
  children,
  ...props
}: ButtonGroupI) => {

  return (
    <div className={`buttonGroup ${segmented ? "btn-segmented" : null}`}>
      {children}
    </div>
  );
}

export default ButtonGroup;