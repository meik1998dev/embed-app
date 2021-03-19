const mapTheme = (theme) => {
  return {
    '--gl-color-row': theme.row || '',
    '--gl-color-text': theme.text || '',
    '--gl-color-primary': theme.primary || '',
    '--gl-color-gray': theme.gray || '',
    '--gl-font-main': theme.fontMain || '',
  }
}

export default mapTheme
