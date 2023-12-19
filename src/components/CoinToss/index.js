import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, currentState: true, total: 0}

  headOrTail = () => {
    const {total} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({total: total + 1})
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        currentState: true,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        currentState: false,
      }))
    }
  }

  render() {
    const {heads, tails, currentState, total} = this.state
    let result
    if (currentState) {
      result = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="image1"
        />
      )
    } else {
      result = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="image1"
        />
      )
    }

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div className="image-container">{result}</div>
          <button className="button1" type="button" onClick={this.headOrTail}>
            Toss Coin
          </button>
          <div className="results">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {heads}</p>
            <p className="total">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
