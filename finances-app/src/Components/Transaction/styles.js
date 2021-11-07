import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ value }) => (value < 0 ? "#e2e1e1" : "#fff")};
  border: 3px solid ${({ value }) => (value < 0 ? "red" : "green")};
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`;
Wrapper.displayName = "WrapperTransaction";
