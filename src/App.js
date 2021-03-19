import Api from 'Api/Api'
import Glossary from 'Components/Glossary/Glossary'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const App = ({ glossaryId }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const initApi = async () => {
      await Api.init({ baseURL: '' })

      setInitialized(true)
    }

    initApi()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {initialized ? (
          <Glossary glossaryId={glossaryId} />
        ) : (
          <p>Caricamento...</p>
        )}
      </div>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

App.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default App
