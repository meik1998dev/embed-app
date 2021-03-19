import Api from 'Api/Api'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { useQuery } from 'react-query'

const Glossary = ({ glossaryId }) => {
  const { isLoading, isError, data, error } = useQuery(
    ['glossary', glossaryId],
    () => Api.getGlossary(glossaryId)
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

  console.log(data)

  return (
    <div>
      <p>Glossary: {glossaryId}</p>
    </div>
  )
}

Glossary.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Glossary)
