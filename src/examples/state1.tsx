export default `
import {useState} from 'react'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      
      <button onClick={(e) => {
        setCount(count + 1)
      }}>Add 1</button>
      <button onClick={(e) => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
      }}>Add 3?</button>
    </div>
  )
}
`