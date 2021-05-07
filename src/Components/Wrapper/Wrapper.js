import Api from 'Api/Api'
import { useQuery } from 'react-query'
import applyTheme from 'Theme/applyTheme'
import PropTypes from 'prop-types'
import WebFont from 'webfontloader'
import defaultTheme from 'Theme/defaultTheme'
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

  return <Glossary glossaryId={glossaryId} />
}

Wrapper.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default Wrapper
