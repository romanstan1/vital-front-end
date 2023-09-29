import React, {
  useRef,
  useState,
  createContext,
  useEffect,
  useContext,
  MouseEvent,
} from "react";
import styled, { css } from "styled-components";

import COLORS from "../styles/colors";
import CreatePanelModal from "../components/CreatePanelModal";

interface OuterProps {
  $visible?: boolean;
  $hide?: boolean;
}

export enum ModalTypes {
  CREATE_PANEL = "CREATE_PANEL",
}

const Outer = styled.div<OuterProps>`
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLORS.black05};
  opacity: 0;
  transition: opacity 0.3s;
  visibility: hidden;
  z-index: 60;

  ${({ $visible }) =>
    $visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};

  ${({ $hide }) =>
    $hide &&
    css`
      opacity: 0;
    `};
`;

type ModalState = {
  isOpen: boolean;
  type?: ModalTypes;
  data?: any;
};

type ModalContextType = {
  modal: ModalState;
  setModal(state: ModalState): void;
};

export const ModalContext = createContext<ModalContextType>({} as any);

export const useModal = () => {
  const { modal, setModal } = useContext(ModalContext);
  return { modal, setModal };
};

interface ProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: undefined,
    data: undefined,
  });
  const [startHide, setStartHide] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleCloseSetModal = () => {
    setModal({
      isOpen: false,
      type: undefined,
      data: undefined,
    });
  };

  const handleClose = () => {
    setStartHide(true);
    setTimeout(() => {
      handleCloseSetModal();
    }, 300);
  };

  const handleCloseOutside = (e: MouseEvent) => {
    if (ref && e && ref.current === e.target) handleClose();
  };

  useEffect(() => {
    if (modal.isOpen) {
      setStartHide(false);
    }
  }, [modal]);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Outer
        ref={ref}
        $hide={startHide}
        $visible={modal.isOpen}
        onMouseDown={handleCloseOutside}
      >
        {modal.type === ModalTypes.CREATE_PANEL && (
          <CreatePanelModal handleClose={handleClose} />
        )}
      </Outer>
      {children}
    </ModalContext.Provider>
  );
};
