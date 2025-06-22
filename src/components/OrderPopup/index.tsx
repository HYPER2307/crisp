import React, { FC } from 'react'
import { ModalWindowV2 } from '../ModalWindowV2'
import { ModalMode } from '../ModalWindowV2/types'
import { useModal } from '../../hooks/useModal'
import { Button } from '../Button/Button'

export const OrderPopup: FC<ReturnType<typeof useModal>> = ({
  ...modalProps
}) => {
  return (
    <ModalWindowV2
      overlayClassName="bg-black/40"
      className="w-full p-4 md:max-w-100 md:p-0"
      isShownOverlay
      mode={ModalMode.default}
      {...modalProps}
    >
      <div className="rounded-20 border border-pastel-beige bg-cream-base p-5">
        <div className="mx-auto mb-5 h-1 w-20 rounded-20 bg-pastel-beige md:hidden" />

        <div className="mb-5 flex items-center justify-between gap-5">
          <h3 className="text-16 font-bold tracking-1.28">
            hdfghdfghdfgh
          </h3>

          <Button className="hover:scale-110" onClick={modalProps.closeModal}>
            x
          </Button>
        </div>

        <hr className="mb-8" />

        <div className="mb-5 rounded-20 border border-pastel-beige p-5">
          <p className="text-center font-ubuntu font-medium tracking-1.28">
            khskldfhgklsdfhg
          </p>
        </div>

        sdfdfghdfghdfgh
      </div>
    </ModalWindowV2>
  )
}
