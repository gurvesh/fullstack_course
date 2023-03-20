import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const initVotes = new Array(anecdotes.length).fill(0)
  const randomNum = () => Math.floor(Math.random() * anecdotes.length)
  let currentChoice = randomNum()
  
  const [selected, setSelected] = useState(currentChoice)
  const nextAnecdote = () => {
    currentChoice = randomNum()
    setSelected(currentChoice)
  }
  
  const [votes, setVotes] = useState(initVotes)
  const newVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const maxVotes = Math.max(...votes)
  const maxVotesIndex = votes.indexOf(maxVotes)
  const mostVoted = anecdotes[maxVotesIndex]
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      
      {anecdotes[selected]} 
      <div>has {votes[selected]} votes</div>
      <div>
        <Button
          handleClick={newVotes}
          text='vote'
        />
        <Button
          handleClick={nextAnecdote}
          text='next anecdote'
        />
      </div>

      <h2>Anecdote with most votes</h2>

      <div>{mostVoted}</div>
      <div>has {maxVotes} votes</div>

    </div>
  )
}

export default App
