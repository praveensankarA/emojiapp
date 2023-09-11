/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
 {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {/* <ul className="emoji-main-container">
            {emojiList.map(each => (
              <EmojiCard item={each} key={each.id} />
            ))}
          </ul> */

// Write your code here.

//  murugan Thunnai
// ----------------->

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {emojiList: [], isGameStatus: true, score: 0, topScore: 0}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gameOver = () => {
    const {emojiList, score, topScore, isGameStatus} = this.state
    if (score > topScore) {
      this.setState({topScore: score, emojiList: [], isGameStatus: false})
    } else {
      this.setState({emojiList: [], isGameStatus: false})
    }
  }

  a = () => {
    const {emojiList, score, isGameStatus, topScore} = this.state
    console.log(score, 'hi')
    this.setState({topScore: 12})
  }

  emojiClick = id => {
    const {emojiList, score, isGameStatus, topScore} = this.state
    const isAlredeyClicked = emojiList.includes(id)

    if (!isAlredeyClicked) {
      if (score < 11) {
        this.setState({emojiList: [...emojiList, id], score: score + 1})
      } else {
        this.setState({
          emojiList: [...emojiList, id],
          score: score + 1,
        })
        this.a()
        this.gameOver()
      }
    } else {
      this.gameOver()
    }
  }

  retry = () => {
    this.setState({isGameStatus: true, score: 0})
  }

  result = () => {
    const {emojiList, score, isGameStatus, topScore} = this.state

    return <WinOrLoseCard retry={this.retry} a={this.a} score={score} />
  }

  getEmojisList = () => {
    const {emojiList, score, isGameStatus, topScore} = this.state
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-main-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard item={each} clickFun={this.emojiClick} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameStatus, score, topScore} = this.state

    return (
      <div className="game-bg-container">
        <NavBar score={score} isGameStatus={isGameStatus} topScore={topScore} />
        <div className="game-emoji-container">
          {isGameStatus ? this.getEmojisList() : this.result()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
