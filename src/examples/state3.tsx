export default `
import {useState} from 'react'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={(e) => {
        setCount(2)
        setCount((c) => c + 2)
      }}>Add??</button>
    </div>
  )
}
`