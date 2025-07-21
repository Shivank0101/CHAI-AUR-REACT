import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


const App = () => {
  return (
    <>
    <h1 className='text-2xl'>Learn About redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
   
   
  )
}

export default App