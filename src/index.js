import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

ReactDOM.render(
  <App glossaryId="Test-Glossary-ID" />,
  document.getElementById('app')
)

module.hot.accept()
