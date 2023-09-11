// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, isGameStatus} = props

  return (
    <nav className="nav-bar">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-logo"
        />
        <h1 className="nav-logo-head">Emoji Game</h1>
      </div>
      {isGameStatus && (
        <div className="nav-score-container">
          <p className="nav-score">Score: {score}</p>
          <p className="nav-top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
