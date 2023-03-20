const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = props => {
  return (
    <>
      {props.parts.map(part => 
        // We need to add a key prop to avoid an error. See this page: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises)
  let sum = 0;
  for (const n of exercises) { sum += n }
  // const totalExercises = exercises.reduce(function(x, y) {
  //   return x + y;
  // }, 0);
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component', 
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
