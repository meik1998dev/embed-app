import Api from 'Api/Api'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { useQuery } from 'react-query'

const Glossary = ({ glossaryId }) => {
  const { isLoading, isError, error } = useQuery(['glossary', glossaryId], () =>
    Api.getGlossary(glossaryId)
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

  return (
    <div className="gl-p-5">
      <div className="gl-bg-secondary gl-p-5">
        <p className="gl-text-text">Glossary: </p>
      </div>
      <p className="gl-text-primary">{glossaryId}</p>
    </div>
  )
}

Glossary.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Glossary)
