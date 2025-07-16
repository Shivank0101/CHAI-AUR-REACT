import React, { useState } from 'react'


const App = () => {
const [color, setColor] = useState("olive")

  return (
  <div className='w-full h-screen duration-200 '
  style={{background:color}}
  >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button
        onClick={()=>setColor('red')}
        className=' rounded bg-red-500'
        >Red</button>

         <button
        onClick={()=>setColor('green')}
        className='rounded bg-green-500'
        >Green</button>
         <button
        onClick={()=>setColor('blue')}
        className='rounded bg-blue-500'
        >Blue</button>
         <button
        onClick={()=>setColor('pink')}
        className='rounded bg-pink-500'
        >Pink</button>
         <button
        onClick={()=>setColor('yellow')}
        className='rounded bg-yellow-500'
        >Yellow</button>


      </div>
    </div>


  </div>
  
  )
}

export default App