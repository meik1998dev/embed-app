/* eslint-disable import/prefer-default-export */
import Api from 'Api/Api'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

export class init {
  start(
    config = {
      elementId: undefined,
      glossaryId: undefined,
    }
  ) {
    if (!config.elementId) {
      throw new Error('Element ID is not defined.')
    }

    if (!config.glossaryId) {
      throw new Error('Glossary ID is not defined.')
    }

    this.config = config

    Api.init({ baseURL: process.env.REACT_API_URL })

    this.render()
  }

  render() {
    const { glossaryId, elementId } = this.config

    return ReactDOM.render(
      <App glossaryId={glossaryId} />,
      document.getElementById(elementId)
    )
  }
}
