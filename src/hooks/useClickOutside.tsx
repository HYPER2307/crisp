import { useEffect, useCallback, RefObject } from "react";
import { MODAL_ROOT_ELEMENT, ROOT_ELEMENT } from "../constants/rootElements";



export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: VoidFunction,
  isActive: boolean = true
) => {
  const handleClick: EventListener = useCallback(
    ({ target }) => {
      if (ref.current && !ref.current.contains(target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    if (!isActive) return;
  
    const root = ROOT_ELEMENT;
    const modalRoot = MODAL_ROOT_ELEMENT;
  
    if (root) root.addEventListener("click", handleClick);
    if (modalRoot) modalRoot.addEventListener("click", handleClick);
  
    return () => {
      if (root) root.removeEventListener("click", handleClick);
      if (modalRoot) modalRoot.removeEventListener("click", handleClick);
    };
  }, [isActive, handleClick]);
};
