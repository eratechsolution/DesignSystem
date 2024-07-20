import React from "react";
import "./ButtonGroup.scss";

interface ButtonGroupI {
  segmented?: boolean;
  children: React.ReactNode;
}

export const ButtonGroup = ({
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
