import Api from 'Api/Api'
import fakeApi from 'Api/fakeApi'
import Glossary from 'Components/Glossary/Glossary'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './index.css'

const App = ({ glossaryId }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const initApi = async () => {
      await fakeApi(500)
      await Api.init({ baseURL: '' })

      setInitialized(true)
    }

    initApi()
  }, [])

  return (
    <div>
      {initialized ? (
        <Glossary glossaryId={glossaryId} />
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  )
}

App.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default App
