import Api from 'Api/Api'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

const initApp = async () => {
  await Api.init({ baseURL: process.env.REACT_API_URL })

  const glossaryId = window.location.pathname.replace('/', '')

  ReactDOM.render(
    <App glossaryId={glossaryId} />,
    document.getElementById('app')
  )
}

;(async () => {
  await initApp()
})().catch((err) => {
  document.body.innerHTML = err.message
})

module.hot.accept()
