import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const DEFAULT_ANIMATION_DELAY = 300; // ms

export const useModal = (isOpen: boolean = false, cookiesKeyModal?: string) => {
  const cookiesIsShownModal = Cookies.get(cookiesKeyModal);

  const [isVisible, setIsVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(
    cookiesIsShownModal !== "false" && isOpen,
  );

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpenModal(false);
      if (cookiesKeyModal) Cookies.set(cookiesKeyModal, "false");
    }, DEFAULT_ANIMATION_DELAY);
  };

  const openModal = () => setIsOpenModal(true);

  useEffect(() => {
    if (isOpenModal) setTimeout(() => setIsVisible(true), 50);
  }, [isOpenModal]);

  return { isOpenModal, isVisible, openModal, closeModal };
};
