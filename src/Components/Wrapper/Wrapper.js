import Api from 'Api/Api'
import { useQuery } from 'react-query'
import applyTheme from 'Theme/applyTheme'
import PropTypes from 'prop-types'
import { memo } from 'react'
import defaultTheme from 'Theme/defaultTheme'
import SelectOrder from 'Components/SelectOrder/SelectOrder'
import InputSearch from 'Components/InputSearch/InputSearch'
import Alphabet from 'Components/Alphabet/Alphabet'

const Wrapper = ({ glossaryId }) => {
  const { isLoading, isError, data, error } = useQuery(
    ['data', glossaryId],
    () => Api.getData(glossaryId)
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

  applyTheme(theme || defaultTheme)

  return (
    <>
      <div className="gl-mb-10 md:gl-flex gl-items-center gl-justify-between">
        <SelectOrder />
        <InputSearch />
      </div>

      <Alphabet />
    </>
  )
}

Wrapper.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Wrapper)
