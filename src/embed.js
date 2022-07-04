/* eslint-disable import/prefer-default-export */
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

export class init {
  start() {
    this.render()
  }

  render() {
    return ReactDOM.render(<App />, document.getElementById('react-app'))
  }
}
