import PropTypes from 'prop-types'
import ScriptTag from 'react-script-tag'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Wrapper from 'Components/Wrapper/Wrapper'

const App = ({ glossaryId }) => {
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
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <ScriptTag
        type="text/javascript"
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      />

      <Wrapper glossaryId={glossaryId} />

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

App.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default App
