import PropTypes from "prop-types";
import Transaction from "../Transaction";

const Transactions = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};
Transactions.propTypes = {
  transactions: PropTypes.array,
};

Transactions.defaultProps = {
  transactions: [],
};
export default Transactions;
