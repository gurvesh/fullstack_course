import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total === 0) return (
    <>
      No feedback given
    </>
  )
  return (
    <>
      <div> good {good}</div>
      <div> neutral {neutral}</div>
      <div> bad {bad}</div>
      <div>all {total} </div>
      <div>average {total / 3}</div>
      <div>positive {good * 100 / total} %</div>
    </>
  )
}

// const Display = ({counter}) => <div>{counter}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        handleClick={goodFeedback}
        text='good'
      />
      <Button
        handleClick={neutralFeedback}
        text='neutral'
      />
      <Button
        handleClick={badFeedback}
        text='bad'
      />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />      
    </div>
  )
}

export default App