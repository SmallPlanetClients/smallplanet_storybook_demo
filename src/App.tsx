import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { Layout } from '@/components/layout/Layout'
import { H1, H2 } from '@/components/typography'
import AppLibrary from '@/views/AppLibrary'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AppLibrary />
        {/* 
        <H1>Hello World</H1>
        <H2>I am H2</H2> */}
      </Layout>
    </ThemeProvider>
  )
}

export default App
