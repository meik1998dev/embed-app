const mapTheme = (theme) => {
  return {
    '--gl-color-primary': theme.primary || '',
    '--gl-color-secondary': theme.secondary || '',
    '--gl-color-text': theme.text || '',
    '--gl-font-main': theme.fontMain || '',
  }
}

export default mapTheme
