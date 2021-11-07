import React from "react";
import PropTypes from "prop-types";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onChange(Number(this.state.value));
    this.setState({ value: "" });
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.value}
          name="balance"
          onChange={this.onChange}
          type="number"
          placeholder="Cума"
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
