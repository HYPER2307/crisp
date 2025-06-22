import { forwardRef, ReactNode } from "react";

export interface Props {
  children: ReactNode;
  className?: string;
  modalId?: string;
}

export const Modal = forwardRef<HTMLDivElement, Props>(
  ({ children, className, modalId = "" }, ref) => (
    <div ref={ref} className={className} data-modal-id={modalId}>
      {children}
    </div>
  ),
);
