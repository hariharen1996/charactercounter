import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {character: '', isTrue: false, data: []}

  changeCharacter = event => {
    this.setState({character: event.target.value})
  }

  submitData = event => {
    event.preventDefault()
    const {character} = this.state
    const newData = {
      id: uuidv4(),
      character,
    }
    if (character !== '') {
      this.setState(prevState => ({
        data: [...prevState.data, newData],
        isTrue: true,
        character: '',
      }))
    }
  }

  render() {
    const {character, isTrue, data} = this.state
    return (
      <div className="character-container">
        <div className="result-container">
          <div className="result-heading">
            <h1 className="char-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {!isTrue ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="img"
            />
          ) : (
            <ul>
              {data.map(item => (
                <li key={item.id}>
                  <p className="result-text">
                    {item.character}: {item.character.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="input-container">
          <div className="input-heading">
            <h1 className="heading">Character Counter</h1>
          </div>
          <form onSubmit={this.submitData}>
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              value={character}
              onChange={this.changeCharacter}
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
