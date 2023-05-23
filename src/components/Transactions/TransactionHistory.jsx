// import PropTypes from 'prop-types';
import { TransactionHistoryTable } from './Transactionhistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default TransactionHistory;
