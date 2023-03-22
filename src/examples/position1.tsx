export default `
import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={(e) => {
        setCount(count + 1)
      }}>Add 1</button>
    </>
  )
}

export default () => {
  const [showSecond, setShowSecond] = useState(true)
  return (
    <div>
      <p>
        <input id='count-cb' type="checkbox" checked={showSecond} onChange={(e) => setShowSecond(e.target.checked)}/>
        <label htmlFor='count-cb'>Show second</label>
      </p>
      <Counter/>
      {showSecond && <Counter/>}
    </div>
  )
}
`