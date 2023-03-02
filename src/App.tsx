import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./hooks/useTransactions";


export function App() {
  const [isNewTransactionModalOpen, setIsNewransactionModalOpen] = useState(false)
  


  function handleOpenNewTransactionModal() {
    setIsNewransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewransactionModalOpen(false)
  }


  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />  

      <GlobalStyle />
    </TransactionProvider>
  );
}

