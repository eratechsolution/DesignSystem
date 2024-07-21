import { X } from "react-feather";
import useDelay from "../../utilities/useDelay";
import Portal from "../../utilities/Portal";
import "./modal.scss";
import { TextStyle } from "../TextStyle";

export const Modal = ({
  isOpen,
  onDismiss,
  children,
  title = "Lorem ipsum",
  footer,
  ...props }: ModalI) => {

  const open = useDelay(isOpen, 600);
  return (open || isOpen) ? (
    <Portal>
      <div className={`jiffyui-modal_overlay  ${(isOpen && open) ? "open" : "close"}`}
        onClick={onDismiss}
        role="none"
      ></div>
      <div className={`jiffyui-modal ${(isOpen && open) ? "open" : "close"}`}>
        <div className={`jiffyui-modal_inner`}>
          <div className="jiffyui-modal-content">
            <div className="jiffyui-modal-header">
              {title && (
                <TextStyle as="h4" type="MdHeading" textColor="Dark">{title}</TextStyle>
              )}
              <button className="jiffyui-close-button" onClick={onDismiss}>
                <X size={20} />
              </button>
            </div>
            <div className="jiffyui-modal-body">
              {children}
            </div>
            {footer &&
              <div className="jiffyui-modal_footer">
                {footer}
              </div>
            }
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};
export interface ModalI {
  isOpen: boolean;
  onDismiss: () => void;
  children: string | React.ReactNode;
  title?: string;
  footer: string | React.ReactNode;
}


export default Modal;
// function Modal(props: any) {
//   const { isOpen, onDismiss, children } = props;
//   const open = useDelay(isOpen, 600);

//   return (open || isOpen) ? (
//     <Portal>
//       <div
//         className={`modal_overlay  ${(isOpen && open) ? "open" : "close"}`}
//         onClick={onDismiss}
//         role="none"
//       ></div>
//       <div className={`modal ${(isOpen && open) ? "open" : "close"}`}>
//         <div className={`modal_inner`}>
//           <div className="modal-content">
//             <div className="modal-header">
//               {/* {title && (
//                 <h3>{title}</h3>
//               )} */}
//               <button className="close-button" onClick={onDismiss}>
//                 <X size={20} />
//               </button>
//             </div>
//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </Portal>
//   ) : null;
// }

// export { Modal };
