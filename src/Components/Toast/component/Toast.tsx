import React, { useContext } from "react";
import { AppContext } from "../../../utilities/context/AppContext";
import Portal from "../../../utilities/Portal";
import "../Toast.css";
export const Toast = () => {
  const context = useContext(AppContext);
  return (
    <Portal>
      <div className="Pixel-toast-wrapper">
        {context.toast.toastItems.map((i: any, index: number) => (
          <React.Fragment key={index}>{i}</React.Fragment>
        ))}
      </div>
    </Portal>
  );
};
export default Toast;
