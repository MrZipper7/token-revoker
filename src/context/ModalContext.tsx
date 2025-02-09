import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

interface ModalContextType {
  showPending: boolean
  setShowPending: React.Dispatch<React.SetStateAction<boolean>>
  accountAddress: string
  setAccountAddress: React.Dispatch<React.SetStateAction<string>>
  isConnected: boolean
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>
  isCorrectNetwork: boolean
  setIsCorrectNetwork: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextType>({
  showPending: false,
  setShowPending: () => {},
  accountAddress: '',
  setAccountAddress: () => {},
  isConnected: false,
  setIsConnected: () => {},
  isCorrectNetwork: false,
  setIsCorrectNetwork: () => {},
})

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showPending, setShowPending] = useState(false)
  const [accountAddress, setAccountAddress] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        showPending,
        setShowPending,
        accountAddress,
        setAccountAddress,
        isConnected,
        setIsConnected,
        isCorrectNetwork,
        setIsCorrectNetwork,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
