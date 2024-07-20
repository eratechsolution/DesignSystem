/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../utilities/context/AppContext";
import { X } from "react-feather";
import { ButtonProps } from "../../Button/Button";
import { classnames } from "../../../utilities/globalFunction";
import "../Toast.css";

function ToastInner(props: ToastI) {
  const {
    content,
    hasDestroyIcon = true,
    duration = 3000,
    prefixIcon,
    color = "positive",
    autoDismiss = true,
    action,
  } = props;
  const [flag, setFlag] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const timerRef: any = useRef<number>();
  const toastRef = useRef<any>();
  const context = useContext(AppContext);
  // Checking type of toast
  const checkType: any = {
    positive: "Pixel-toast--positive",
    notice: "Pixel-toast--notice",
    neutral: "Pixel-toast--neutral",
    negative: "Pixel-toast--negative",
    information: "Pixel-toast--information",
  };
  const controlStates = checkType[color];

  // Deleting toast after particular timeout
  const handleDeleteToast = () => {
    clearTimeout(timerRef.current);
    setIsVisible(false);
    setTimeout(() => {
      setFlag(false);
      toastRef.current &&
        context.toast.handleClearToastItems(toastRef.current.parentElement);
    }, 100);
  };

  useEffect(() => {
    if (!autoDismiss) return;
    timerRef.current = setTimeout(handleDeleteToast, duration);
    return () => clearTimeout(timerRef.current);
  }, [duration]);

  const clearBtn = () => {
    return (
      <span
        role="none"
        onClick={() => {
          handleDeleteToast();
        }}
        className="Pixel-toast__close"
      >
        <X size={16} color="#ffffff" />
      </span>
    );
  };

  return (
    <>
      {flag && (
        <div
          ref={toastRef}
          className={classnames({
            "Pixel-toast": true,
            "Pixel-toast--in": isVisible,
            "Pixel-toast--out": !isVisible,
            [controlStates]: controlStates,
          })}
        >
          <div className="Pixel-toast__contentWrapper">
            {prefixIcon && prefixIcon}
            <p className="Pixel-toast__msg">
              <span>{content}</span>
            </p>
          </div>
          <div className="Pixel-toast__actionContainer">
            {action && (
              <div
                className="Pixel-toast__action"
                onClick={(e) => e.stopPropagation()}
                role="none"
              >
                <button>{action?.children}</button>
              </div>
            )}
            {hasDestroyIcon && clearBtn()}
          </div>
        </div>
      )}
    </>
  );
}
export interface ToastI {
  content: React.ReactNode;
  prefixIcon?: React.ReactNode;
  hasDestroyIcon?: boolean;
  duration?: number;
  color?: "information" | "negative" | "neutral" | "notice" | "positive";
  autoDismiss?: boolean;
  action?: ButtonProps;
}
export default ToastInner;
