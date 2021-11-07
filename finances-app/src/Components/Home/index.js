import React from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundary";
import { Wrapper } from "./styles";
let id = 0;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      balance: 0,
      transactions: [],
    };
  }

  onChange = ({ balance, date, comment }) => {
    this.setState((state) => ({
      balance: state.balance + Number(balance),
      transactions: [
        { value: +balance, date, comment, id: ++id },
        ...state.transactions,
      ],
    }));
  };
  render() {
    return (
      <ErrorBoundary>
        <Wrapper>
          <Balance balance={this.state.balance}>Баланс:</Balance>
          <Form onChange={this.onChange} />
          <Transactions transactions={this.state.transactions} />
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

export default Home;
