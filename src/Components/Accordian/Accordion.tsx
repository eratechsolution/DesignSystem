import React from "react";
import { ChevronDown } from "react-feather";
import './Accordian.scss';
interface AccordionProps {
  accordionHeader?: string | React.ReactNode;
  onClick?: any;
  isExpended: boolean;
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  withNumber?: boolean;
}

export const Accordion = ({
  accordionHeader,
  onClick,
  isExpended,
  children,
  icon,
   ...props }:
  AccordionProps) => {
  return (
    <div className={`accordion`}>
      <div className={`accordion-header ${!isExpended ? "" : "active"} ${icon ? "accordion-left--icon" : ""}`} onClick={onClick}>
        {icon &&
          <div className="accordion-headaer__icon">
            {icon}
          </div>
        }
        <h3 className="accordion-header__title">
          {accordionHeader}
        </h3>
        <ChevronDown size="16" />
      </div>
      <div className={`accordion-body ${!isExpended ? "collapsed" : ""}`}>
        <div className="accordion-body_content">
          {children}
        </div>
      </div>
    </div>
  );
};
