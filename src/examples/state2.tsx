export default `
import {useState} from 'react'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={(e) => {
        setCount((c) => c + 2)
        setCount((c) => c + 3)
      }}>Add 5?</button>
    </div>
  )
}
`