import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';


const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header header={course}/>
      <Content 
        part1={part1.name} point1={part1.exercises}
        part2={part2.name} point2={part2.exercises}
        part3={part3.name} point3={part3.exercises}
      />
      <Total exercises1={part1.exercises} 
             exercises2={part2.exercises} 
             exercises3={part3.exercises}/>
    </div>
  )
}

export default App
