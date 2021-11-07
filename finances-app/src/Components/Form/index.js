import React from "react";
import PropTypes from "prop-types";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: "",
      date: new Date().toISOString().substring(0, 10),
      comment: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onChange(this.state);
    this.setState({
      balance: "",
      date: new Date().toISOString().substring(0, 10),
      comment: "",
    });
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: name === "balance" ? +value : value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.onChange}
        />
        <input
          value={this.state.balance}
          name="balance"
          onChange={this.onChange}
          type="number"
          placeholder="Cума"
        />
        <textarea
          name="comment"
          value={this.state.comment}
          onChange={this.onChange}
        />
        <button>Зберегти</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
