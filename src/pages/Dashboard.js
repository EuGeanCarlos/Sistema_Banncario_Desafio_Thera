
import React from 'react';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import Transacoes from '../components/Transacoes';
import QuickActions from '../components/QuickActions';


//DADOS DOS USUÁRIOS SIMULADOS
function Dashboard() {
 
  const userData = {
    name: 'João Silva',
    balance: '2.845,76',
    accountNumber: '12345-6'
  };

  //DADOS DE TRANSAÇÕES SIMULADAS
  const transactions = [
    {
      id: 1,
      description: 'Transferência recebida - Maria',
      amount: 150.00,
      type: 'income',
      date: '2024-01-15'
    },
    {
      id: 2,
      description: 'Compra Supermercado',
      amount: -89.90,
      type: 'outcome',
      date: '2024-01-14'
    },
    {
      id: 3,
      description: 'Depósito',
      amount: 500.00,
      type: 'income',
      date: '2024-01-12'
    },
    {
      id: 4,
      description: 'Pagamento Fatura Cartão',
      amount: -320.50,
      type: 'outcome',
      date: '2024-01-10'
    },
    {
      id: 5,
      description: 'Transferência - Pedro',
      amount: -50.00,
      type: 'outcome',
      date: '2024-01-08'
    }
  ];

  return (
    <div className="dashboard-container">
      <Header 
        userName={userData.name} 
        balance={userData.balance} 
      />
      
      <div className="dashboard-content">
        <div className="dashboard-grid">
          {/* Coluna Principal */}
          <div className="main-column">
            <BalanceCard 
              balance={userData.balance}
              accountNumber={userData.accountNumber}
            />
            
            <Transacoes transactions={transactions} />
          </div>
          
          {/* Sidebar */}
          <div className="sidebar">
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;