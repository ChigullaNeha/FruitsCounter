import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananaCount: 0}

  increaseBananas = () => {
    const {bananaCount} = this.state
    this.setState({bananaCount: bananaCount + 1})
  }

  increaseMangoes = () => {
    const {mangoesCount} = this.state
    this.setState({mangoesCount: mangoesCount + 1})
  }

  render() {
    const {bananaCount, mangoesCount} = this.state
    return (
      <div className="first-container">
        <div className="second-container">
          <h1>
            Bob ate {mangoesCount} mangoes {bananaCount} bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango"
              />
              <button
                type="button"
                className="fruit-btn"
                onClick={this.increaseMangoes}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana"
              />
              <button
                type="button"
                className="fruit-btn"
                onClick={this.increaseBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
