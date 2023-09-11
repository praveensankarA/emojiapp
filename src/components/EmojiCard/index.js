// Write your code here.
//  {
//     id: 0,
//     emojiName: 'Face with stuck out tongue',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
//   },

import './index.css'

const EmojiCard = props => {
  const {item, clickFun} = props

  const a = () => {
    clickFun(item.id)
  }

  return (
    <li className="">
      <button onClick={a} type="button" className="emoji-ele">
        <img src={item.emojiUrl} className="emoji" alt={item.emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
