import Api from 'Api/Api'
import PropTypes from 'prop-types'
import { memo, useEffect, useState } from 'react'

const Glossary = ({ glossaryId }) => {
  const [fetched, setFetched] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Api.getGlossary(glossaryId)
      } catch (error) {
        setErr(error)
      } finally {
        setFetched(true)
      }
    }

    fetchData()
  }, [])

  if (!fetched) {
    return (
      <div>
        <p>Caricamento...</p>
      </div>
    )
  }

  if (err) {
    return (
      <div>
        <p>Errore: {err.message}</p>
      </div>
    )
  }

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
