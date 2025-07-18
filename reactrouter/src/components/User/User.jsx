import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-blue-700 text-center text-xl'>User: {userid}</div>
  )
}

export default User