import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showPending, setShowPending] = useState(false);

  return (
    <ModalContext.Provider value={{ showPending, setShowPending }}>
      {children}
    </ModalContext.Provider>
  );
};
