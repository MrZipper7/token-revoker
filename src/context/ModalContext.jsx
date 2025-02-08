import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showPending, setShowPending] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);

  return (
    <ModalContext.Provider value={{ showPending, setShowPending, accountAddress, setAccountAddress, isConnected, setIsConnected, isCorrectNetwork, setIsCorrectNetwork }}>
      {children}
    </ModalContext.Provider>
  );
};
