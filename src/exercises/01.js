// Counter: useState
// 🐨 you'll need to add {useState} to this import statement
import React, {useState} from 'react'

// 💰 the `useState` hook allows you to use state
// from within function components in react:
// const [name, setName] = useState('Angela')

const useCount = ({initialCount = 0} = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count => count + 1)

  return [count, increment]
}

function Counter({initialCount}) {
  // 🐨 you'll call useState here to get count and setCount
  // 🐨 render the count here and add an onClick handler that increments the count
  const [count, increment] = useCount(initialCount)
  return <button onClick={increment}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useState'

export default Usage
