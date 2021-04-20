import Api from 'Api/Api'
import { useQuery } from 'react-query'
import applyTheme from 'Theme/applyTheme'
import PropTypes from 'prop-types'
import WebFont from 'webfontloader'
import defaultTheme from 'Theme/defaultTheme'
import Glossary from 'Components/Glossary/Glossary'
import InputSearch from 'Components/InputSearch/InputSearch'
import { useRef, useState } from 'react'

const Wrapper = ({ glossaryId }) => {
  const { isLoading, isError, data, error } = useQuery(
    ['data', glossaryId],
    () => Api.getData(glossaryId)
  )

  const glossaryContainer = useRef(null)

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
      families: [`${config.main_font}:400,700`, `${config.title_font}:400,700`],
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

  const scrollToTop = () =>
    glossaryContainer.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <div ref={glossaryContainer}>
      {config.search === 0 ? null : (
        <div className="gl-mb-5 md:gl-flex gl-items-center gl-justify-end">
          <InputSearch
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
      )}

      <Glossary
        glossaryId={glossaryId}
        searchVal={searchVal}
        resetSearch={() => setSearchVal('')}
        scrollToTop={scrollToTop}
      />
    </div>
  )
}

Wrapper.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default Wrapper
