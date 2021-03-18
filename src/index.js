import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App glossaryId="Test-Glossary-ID" />,
  document.getElementById('app')
)

module.hot.accept()
