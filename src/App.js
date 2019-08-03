import React, { Component } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
//import logo from './logo.svg';
import logo from './sendmic.png';

import GlobalStyle, { Button, theme1, theme2 } from './theme/globalStyle';
import ThemeSelect from './components/ThemeSelect';

const AppWrapper = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const SendLogo = styled.img`
  height: 100px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`


const AppHeader = styled.div`
  background-color: #222;
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`

const AppTitle = styled.h1`
  font-weight: 900;
`

const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

class App extends Component {
  state = {
    theme: theme1
  }
  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <AppWrapper>
            <AppHeader>
              <SendLogo src={logo} alt="logo" />
              <AppTitle>Welcome to React</AppTitle>
            </AppHeader>
            <AppIntro>
              Bootstrapped with <code>create-react-app</code>.
            </AppIntro>
            <AppIntro>
              Components styled with <code>styled-components</code>{' '}
              <EmojiWrapper aria-label="nail polish" />
            </AppIntro>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
            <ThemeSelect handleThemeChange={this.handleThemeChange} />
          </AppWrapper>
          <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App