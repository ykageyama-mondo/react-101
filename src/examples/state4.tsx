export default `
import {useState} from 'react'

export default () => {
  const [counts, setCounts] = useState([12])
  const [words, setWords] = useState({word: 'ha'})

  return (
    <div>
      <p>Counts: {counts.join(', ')}</p>

      <button onClick={(e) => {
        counts.push(Math.floor(Math.random() * 10) + 65)
        console.log(counts)
      }}>Funny</button>

      <p>Word: {words.word}</p>

      <button onClick={(e) => {
        words.word += 'ha'
        console.log(words)
      }}>Laugh</button>
    </div>
  )
}
`