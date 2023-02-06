import {ThemeProvider} from 'styled-components'
import {theme} from '@/styles/theme'
import {Layout} from '@/components/layout/Layout'
import AppLibrary from '@/views/AppLibrary'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AppLibrary/>
      </Layout>
    </ThemeProvider>
  )
}

export default App
