import React from 'react'

function Task({task}) {
  return (
    <>
       <div className='flex flex-row space-x-2 w-full
        mx-auto  rounded p-5 bg-white'>
          <p className='w-3/4 italic'>
            {task}
            </p>  
        </div> 
    </>
  )
}

export default Task