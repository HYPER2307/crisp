import { ModalMode } from "./types";

type ModalClassName = Record<ModalMode, { visible: string; invisible: string }>;

export const MODAL_CLASSNAME: ModalClassName = {
  drawer: {
    visible:
      "visible fixed top-1/2 -translate-y-1/2 right-0 md:right-25 translate-x-0 rounded-lg transition-all duration-300 z-30",
    invisible:
      "invisible fixed top-1/2 -translate-y-1/2 right-0 translate-x-full rounded-lg transition-all duration-300 z-30",
  },
  default: {
    visible:
      "visible fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 scale-100 opacity-100 rounded-lg transition-all duration-300 z-30",
    invisible:
      "invisible fixed top-1/2 translate-y-full left-1/2 -translate-x-1/2 scale-0 opacity-50 rounded-lg transition-all duration-300 z-30",
  },
} as const;

export const MODAL_OVERLAY_CLASSNAME: ModalClassName = {
  drawer: {
    visible: "visible fixed top-0 left-0 w-full h-full z-20",
    invisible: "invisible fixed top-0 left-0 w-full h-full z-20",
  },
  default: {
    visible: "visible fixed top-0 left-0 w-full h-full z-20",
    invisible: "invisible fixed top-0 left-0 w-full h-full z-20",
  },
} as const;
