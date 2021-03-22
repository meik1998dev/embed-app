import Api from 'Api/Api'
import { useQuery } from 'react-query'
import applyTheme from 'Theme/applyTheme'
import PropTypes from 'prop-types'
import { memo } from 'react'
import defaultTheme from 'Theme/defaultTheme'
import SelectOrder from 'Components/SelectOrder/SelectOrder'
import InputSearch from 'Components/InputSearch/InputSearch'
import Alphabet from 'Components/Alphabet/Alphabet'
import Glossary from 'Components/Glossary/Glossary'

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

      <div className="gl-flex">
        <div className="gl-pl-4 gl-order-2 lg:gl-pl-0 lg:gl-pr-4 lg:gl-order-1 gl-relative">
          <Alphabet />
        </div>

        <div className="gl-flex-1 gl-order-1 lg:gl-order-2">
          <Glossary />
        </div>
      </div>
    </>
  )
}

Wrapper.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Wrapper)
