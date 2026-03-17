import './EarningsOverview.css';

const mockEarningsData = {
  thisMonth: 2450,
  lastMonth: 3120,
  thisYear: 28340,
  recentTransactions: [
    {
      id: 1,
      date: '2026-03-14',
      client: 'Sarah Johnson',
      design: 'Minimalist Moon',
      amount: 150,
      status: 'Completed',
    },
    {
      id: 2,
      date: '2026-03-12',
      client: 'Mike Chen',
      design: 'Traditional Rose',
      amount: 250,
      status: 'Completed',
    },
    {
      id: 3,
      date: '2026-03-10',
      client: 'Emma Davis',
      design: 'Watercolor Flower',
      amount: 220,
      status: 'Completed',
    },
    {
      id: 4,
      date: '2026-03-08',
      client: 'Alex Thompson',
      design: 'Snake Dagger',
      amount: 380,
      status: 'Pending',
    },
    {
      id: 5,
      date: '2026-03-05',
      client: 'Jessica Lee',
      design: 'Geometric Wolf',
      amount: 400,
      status: 'Completed',
    },
  ],
};

function EarningsOverview() {
  const { thisMonth, lastMonth, thisYear, recentTransactions } =
    mockEarningsData;
  const monthChange = ((thisMonth - lastMonth) / lastMonth) * 100;

  return (
    <div className="earnings-overview">
      <div className="section-header">
        <h2>Earnings Overview</h2>
        <button className="btn-primary">Download Report</button>
      </div>

      <div className="earnings-stats">
        <div className="earning-card primary">
          <div className="earning-label">This Month</div>
          <div className="earning-value">${thisMonth.toLocaleString()}</div>
          <div className={`earning-change ${monthChange < 0 ? 'negative' : ''}`}>
            {monthChange > 0 ? '+' : ''}
            {monthChange.toFixed(1)}% from last month
          </div>
        </div>
        <div className="earning-card">
          <div className="earning-label">Last Month</div>
          <div className="earning-value">${lastMonth.toLocaleString()}</div>
        </div>
        <div className="earning-card">
          <div className="earning-label">This Year</div>
          <div className="earning-value">${thisYear.toLocaleString()}</div>
        </div>
      </div>

      <div className="transactions-section">
        <h3>Recent Transactions</h3>
        <div className="transactions-list">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-main">
                <div className="transaction-info">
                  <div className="transaction-client">
                    {transaction.client}
                  </div>
                  <div className="transaction-design">
                    {transaction.design}
                  </div>
                </div>
                <div className="transaction-right">
                  <div className="transaction-amount">
                    ${transaction.amount}
                  </div>
                  <div
                    className={`transaction-status ${transaction.status.toLowerCase()}`}
                  >
                    {transaction.status}
                  </div>
                </div>
              </div>
              <div className="transaction-date">{transaction.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EarningsOverview;
