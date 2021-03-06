import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction{
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export function TransactionsTable(){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => { 
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat('pt-Br',{
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat('pt-Br').format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              )
            })} 
          </tbody>
      </table>
    </Container>
  )
}