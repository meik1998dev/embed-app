import Api from 'Api/Api'
import Glossary from 'Components/Glossary/Glossary'
import { useQuery } from 'react-query'
import applyTheme from 'Theme/applyTheme'
import PropTypes from 'prop-types'
import { memo } from 'react'

const Setup = ({ glossaryId }) => {
  const { isLoading, isError, data, error } = useQuery(
    ['config', glossaryId],
    () => Api.getConfig(glossaryId)
  )

  if (isLoading) {
    return (
      <div>
        <p>Caricamento...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <p>Errore: {error?.message}</p>
      </div>
    )
  }

  const { theme } = data

  applyTheme(theme)

  return <Glossary glossaryId={glossaryId} />
}

Setup.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Setup)
