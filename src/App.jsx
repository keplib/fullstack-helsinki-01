import { useState } from 'react'


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}! You are {props.age} old!</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 26;

  return (
    <div >
      <Hello name='Lizzy' age={age}/>
      <Hello name={name} age={26+10}/>
    </div>
  )
}

export default App
