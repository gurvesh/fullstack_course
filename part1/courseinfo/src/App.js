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

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} exercises={props.exercises[0]} />
      <Part part={props.parts[1]} exercises={props.exercises[1]} />
      <Part part={props.parts[2]} exercises={props.exercises[2]} />
    </>
  )
}

const Total = (props) => {
  var totalExercises = props.exercises.reduce(function(x, y) {
    return x + y;
  }, 0);
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10}
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7}
  const part3 = {
    name: 'State of a component', 
    exercises: 14}
  const all_parts = [part1, part2, part2]

  return (
    <div>
      <Header course={course} />
      <Content parts={all_parts.map(part => part.name)} exercises={all_parts.map(part => part.exercises)} />
      <Total exercises={all_parts.map(part => part.exercises)} />
    </div>
  )
}

export default App;
