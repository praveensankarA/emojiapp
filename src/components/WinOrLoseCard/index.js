// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {retry, score, a} = props
  const title = score === 12 ? 'You Won' : 'You Lose'
  const subTitle = score === 12 ? 'Best Score' : 'Score'
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="result-container">
      <div className="score-container">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{score}/12</p>
        <button onClick={retry} type="button" className="re-">
          Play again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
