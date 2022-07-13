import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { Estimate } from './Components/EstimateStep/Estimate'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <RecoilRoot>
          <Estimate />
        </RecoilRoot>
      </ChakraProvider>
    </div>
  )
}

export default App
