import React from "react";

import Transactions from ".";

export default {
  title: "Example/Transactions",
  component: Transactions,
};

const Template = (args) => <Transactions {...args} />;

export const Income = Template.bind({});
Income.args = {
  transactions: [],
};
