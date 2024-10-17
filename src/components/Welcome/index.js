/* eslint-disable no-unused-vars */
// Write your code here
// eslint-disable-next-line no-unused-vars
import {Component} from 'react'

import './index.css'

// eslint-disable-next-line no-unused-vars
class Welcome extends Component {
  state = {text: 'Subscribe'}

  change = () => {
    const {text} = this.state

    if (text === 'Subscribe') {
      this.setState(prevState => ({
        text: 'Subscribed',
      }))
    } else {
      this.setState(prevState => ({
        text: 'Subscribe',
      }))
    }
  }

  render() {
    const {text} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.change}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
