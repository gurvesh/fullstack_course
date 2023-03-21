const Header = (props) => {
    return (
      <h2>{props.course}</h2>
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
      <p><b>total of {totalExercises} exercises</b></p>
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

export default Course