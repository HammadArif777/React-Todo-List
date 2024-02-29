import React from 'react'

function Wrapper({children}) {
  return (
    <>
    <div className='bg-slate-100 w-1/2 md:w-1/4 mx-auto rounded p-5 mt-5'>
    {children}
    </div>
        
    </>
  )
}

export default Wrapper