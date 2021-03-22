const mapTheme = (theme) => {
  return {
    '--gl-color-row': theme.row || '',
    '--gl-color-body': theme.body || '',
    '--gl-color-primary': theme.primary || '',
    '--gl-font-main': theme.fontMain || '',
  }
}

export default mapTheme
