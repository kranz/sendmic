import styled, { createGlobalStyle, css } from "styled-components"


const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
 `
export default GlobalStyle;

export const theme1 = {
  primary: '#7F9172',
  secondary: '#C9B1BD',
  danger: '#B49594',
  light: '#D5DFE5',
  dark: '#567568'
}

export const theme2 = {
  primary: '#E4B7E5',
  secondary: '#B288C0',
  danger: '#7E5A9B',
  light: '#63458A',
  dark: '#9A48D0'
}

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
`