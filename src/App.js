import { ChakraProvider } from '@chakra-ui/react'
import { Estimate } from './Components/EstimateStep/Estimate'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Estimate />
      </ChakraProvider>
    </div>
  )
}

export default App
