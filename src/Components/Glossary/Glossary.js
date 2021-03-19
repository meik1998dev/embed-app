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
    <div className="gl-p-5 gl-font-main">
      <div className="gl-bg-row gl-mb-2 gl-p-2">Bg row</div>
      <div className="gl-text-text">Text color</div>
      <div className="gl-text-primary">Primary color</div>
      <div className="gl-text-gray">Gray color</div>
      <div>Glossary ID: {glossaryId}</div>
    </div>
  )
}

Glossary.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Glossary)
