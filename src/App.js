import Api from 'Api/Api'
import Wrapper from 'Components/Wrapper/Wrapper'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const App = ({ glossaryId }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const initApp = async () => {
      await Api.init({ baseURL: '' })
      setInitialized(true)
    }

    initApp()
  }, [])

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <>
        {initialized ? (
          <Wrapper glossaryId={glossaryId} />
        ) : (
          <div>Caricamento...</div>
        )}
      </>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

App.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default App
