import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';


const App = () => {

  const course = 'Half Stack application development'

  const parts = [
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

  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  return (
    <div>
      <Header header={course}/>
      <Content 
        part1={parts[0].name} point1={parts[0].exercises}
        part2={parts[1].name} point2={parts[1].exercises}
        part3={parts[2].name} point3={parts[2].exercises}
      />
      <Total exercises1={parts[0].exercises} 
             exercises2={parts[1].exercises} 
             exercises3={parts[2].exercises}/>
    </div>
  )
}

export default App
