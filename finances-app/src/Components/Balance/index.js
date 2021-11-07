const Balance = ({ balance }) => {
  return <div>{!balance ? "ПОВНИЙ НУЛЬ" : "Баланс = " + balance}</div>;
};

export default Balance;
