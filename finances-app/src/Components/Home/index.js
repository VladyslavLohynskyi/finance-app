import React from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
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

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + value,
      transactions: [
        { value, label: "change", id: ++id },
        ...state.transactions,
      ],
    }));
  };
  render() {
    return (
      <Wrapper>
        <Balance balance={this.state.balance}>Баланс:</Balance>
        <Form onChange={this.onChange} />
        <Transactions transactions={this.state.transactions} />
      </Wrapper>
    );
  }
}

export default Home;
