import React, { FC, ReactNode } from "react";
export interface Props {
  children: ReactNode;
  isShownOverlay?: boolean;
  className?: string;
}
export const Overlay: FC<Props> = ({ children, className, isShownOverlay }) => {
  if (isShownOverlay) return <div className={className}>{children}</div>;
  return <>{children}</>;
};
