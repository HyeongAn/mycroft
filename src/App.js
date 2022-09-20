import Header from './components/Header/Header'
import Body from './components/Body/Body'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body />
    </>
  )
}

export default App
