import cn from "classnames";
import { FC, ReactNode, useRef } from "react";

import { Modal } from "./Modal";
import { Overlay } from "./Overlay";
import { Portal } from "./Portal";
import { ModalMode } from "./types";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useModal } from "../../hooks/useModal";
import { MODAL_CLASSNAME, MODAL_OVERLAY_CLASSNAME } from "./constants";

interface Props extends ReturnType<typeof useModal> {
  children: ReactNode;
  mode?: ModalMode;
  isActivePortal?: boolean;
  isShownOverlay?: boolean;
  isActiveCloseClickOutside?: boolean;
  overlayClassName?: string;
  className?: string;
  modalId?: string;
}

export const ModalWindowV2: FC<Props> = ({
  mode = ModalMode.drawer,
  isActiveCloseClickOutside = true,
  isActivePortal = true,
  children,
  isOpenModal,
  isVisible,
  className,
  isShownOverlay,
  overlayClassName,
  closeModal,
  modalId = "",
}) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, closeModal, isActiveCloseClickOutside);

  const combinedOverlayClassNames = cn(
    {
      [MODAL_OVERLAY_CLASSNAME[mode].visible]: isVisible,
      [MODAL_OVERLAY_CLASSNAME[mode].invisible]: !isVisible,
    },
    overlayClassName,
  );

  const combinedModalClassNames = cn(
    {
      [MODAL_CLASSNAME[mode].visible]: isVisible,
      [MODAL_CLASSNAME[mode].invisible]: !isVisible,
    },
    className,
  );

  if (!isOpenModal) return null;

  return (
    <Portal isActivePortal={isActivePortal}>
      <Overlay
        isShownOverlay={isShownOverlay}
        className={combinedOverlayClassNames}>
        <Modal ref={modalRef} className={combinedModalClassNames}>
          {children}
        </Modal>
      </Overlay>
    </Portal>
  );
};
