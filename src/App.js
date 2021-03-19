import Api from 'Api/Api'
import Setup from 'Components/Setup/Setup'
import PropTypes from 'prop-types'
import { memo, useEffect, useState } from 'react'
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
    const initApp = async () => {
      await Api.init({ baseURL: '' })
      setInitialized(true)
    }

    initApp()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {initialized ? (
          <Setup glossaryId={glossaryId} />
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

export default memo(App)
