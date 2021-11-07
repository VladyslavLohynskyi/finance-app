import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
}`;

export const Wrapper = styled.div`
  background-color: #eeeeee;
  padding: 5px;
`;

Wrapper.displayName = "WrapperApp";
