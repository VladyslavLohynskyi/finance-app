import PropTypes from "prop-types";
import { Wrapper } from "./styles";

const Transaction = ({ transaction }) => {
  return (
    <Wrapper value={transaction.value}>
      date: {transaction.date}
      <p>
        Value: {transaction.value} {transaction.comment}
      </p>
    </Wrapper>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

Transaction.defaultProps = {
  transaction: {
    lebel: "",
    value: 0,
  },
};

export default Transaction;
