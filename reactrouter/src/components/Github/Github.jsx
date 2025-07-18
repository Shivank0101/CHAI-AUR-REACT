import React, { useEffect,useState } from 'react'

const Github = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
            
        })

    },[])
  return (
    <div className='text-center  m-4 bg-amber-400  text-white'>Github Followers :{data.followers} </div>
  )
}

export default Github