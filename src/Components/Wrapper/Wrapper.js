import Api from 'Api/Api'
import { useQuery } from 'react-query'
import applyTheme from 'Theme/applyTheme'
import PropTypes from 'prop-types'
import WebFont from 'webfontloader'
import defaultTheme from 'Theme/defaultTheme'
import Glossary from 'Components/Glossary/Glossary'
import InputSearch from 'Components/InputSearch/InputSearch'
import { useState } from 'react'
// import InputSearch from 'Components/InputSearch/InputSearch'
// import Alphabet from 'Components/Alphabet/Alphabet'

const Wrapper = ({ glossaryId }) => {
  const { isLoading, isError, data, error } = useQuery(
    ['data', glossaryId],
    () => Api.getData(glossaryId)
  )

  const [searchVal, setSearchVal] = useState('')

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

  const { config } = data

  WebFont.load({
    google: {
      families: [config.main_font, config.title_font],
    },
  })

  const theme = {
    ...defaultTheme,
    fontMain: config.main_font,
    fontTitle: config.title_font,
    primaryColor: config.primary_color,
    secondaryColor: config.secondary_color,
  }

  applyTheme(theme)

  return (
    <>
      {config.search === 0 ? null : (
        <div className="gl-mb-5 md:gl-flex gl-items-center gl-justify-end">
          <InputSearch
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
      )}

      <div className="gl-flex">
        {/* {alphabet && (
          <div className="gl-pl-4 gl-order-2 lg:gl-pl-0 lg:gl-pr-4 lg:gl-order-1 gl-relative">
            <Alphabet />
          </div>
        )} */}

        <div className="gl-flex-1 gl-order-1 lg:gl-order-2">
          <Glossary
            glossaryId={glossaryId}
            searchVal={searchVal}
            resetSearch={() => setSearchVal('')}
          />
        </div>
      </div>
    </>
  )
}

Wrapper.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default Wrapper
