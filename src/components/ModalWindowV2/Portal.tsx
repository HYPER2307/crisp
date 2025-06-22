import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { MODAL_ROOT_ELEMENT } from "../../constants/rootElements";

interface Props {
  children: ReactNode;
  isActivePortal?: boolean;
}

export const Portal = ({ children, isActivePortal }: Props) => {
  if (isActivePortal && MODAL_ROOT_ELEMENT) {
    return createPortal(children, MODAL_ROOT_ELEMENT);
  }

  return <>{children}</>;
};
