import { useContext } from "react";
import { AppContext } from "../../utilities/context/AppContext";
import ToastInner, { ToastI } from "./component/ToastInner";
const useToast = () => {
  const context = useContext(AppContext);
  const toastItem = ({
    content,
    color,
    hasDestroyIcon,
    duration,
    prefixIcon,
    autoDismiss,
    action,
  }: ToastI) => {
    const toast = (
      <ToastInner
        content={content}
        color={color}
        hasDestroyIcon={hasDestroyIcon}
        duration={duration}
        prefixIcon={prefixIcon}
        autoDismiss={autoDismiss}
        action={action}
      />
    );
    context.toast.handleToastItems(toast);
  };
  return toastItem;
};
export default useToast;
