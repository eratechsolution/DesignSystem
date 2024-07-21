import { forwardRef, useId, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Actionlist.scss";
export interface ActionListI {
  open: boolean;
  activator: React.ReactNode;
  options: ActionListObjI[];
  onClose: () => void;
  direction?: "left" | "right" | "auto";
}
export interface ActionListObjI {
  title?: string;
  id?: number | string;
  items: ActionListItemsI[];
}
export interface ActionListItemsI {
  id?: number | string;
  content?: string;
  destructive?: boolean;
  description?: string;
  onClick?: () => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  isDisabled?: boolean;
}

const Actionlist = forwardRef((props: ActionListI, ref) => {
  const { open, activator, options, onClose, direction = "auto" } = props;
  const actionlistRef = useRef<any>(null);
  const handleClose = () => {
    onClose();
  };
  const rId = useId();
  const handleOutsideClick = (event: any) => {
    const container = document.getElementById(`${"pixelActionlist" + rId}`);
    if (container && !container.contains(event.target)) {
      onClose();
    }
  };
  return (
    <div
      ref={actionlistRef}
      id={`${"jiffyui-Actionlist" + rId}`}
      className="pixel-actionlist inline-flex"
    >
      {activator}
      <Dropdown
        open={open}
        ref={actionlistRef}
        padding={8}
        direction={direction}
        onOutsideClick={handleOutsideClick}
      >
        {options?.map((items: any, groupIndex: any) => {
          return (
            <div
              id={items.id}
              key={groupIndex}
              className="jiffyui-item__container"
            >
              {items.title && (
                <span className="jiffyui-actionlist__title line-height-18">
                  {items.title}
                </span>
              )}
              <ul>
                {items.items?.map((item: any, index: any) => {
                  return (
                    <li
                      role="none"
                      className={`jiffyui-actionlist__item c-pointer p-8 ${item.destructive ? "actionlist__item--destructive" : ""} ${item.isDisabled ? "actionlist__item--disabled" : ""}`}
                      id={item.id}
                      key={index}
                      onClick={() => {
                        if (item.isDisabled) return;
                        !item.isDisabled && item.onClick();

                        handleClose();
                      }}
                    >
                      <div className="jiffyui-actionlist_item__prefix__suffix">
                        {item.prefixIcon && <div className="jiffyui-actionlist_item__prefix--icon">{item.prefixIcon}</div>}
                        <div className="jiffyui-actionlist_item__label--description">
                          <span className="jiffyui-actionlist_item__label">{item.content}</span>
                          {item.description && <p className="jiffyui-actionlist_item_description">{item.description}</p>}
                        </div>
                        {item.suffixIcon && <div className="jiffyui-actionlist_item__suffix--icon">{item.suffixIcon}</div>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Dropdown>
    </div>
  );
});

export default Actionlist;