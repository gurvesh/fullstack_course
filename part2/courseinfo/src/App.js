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
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises)
  // let sum = 0;
  // for (const n of exercises) { sum += n }
  const totalExercises = exercises.reduce((x, y) => x + y, 0);
  return (
    <p>total of {totalExercises} exercises</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component', 
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return (
    <Course course={course} />
  )
}

export default App;
