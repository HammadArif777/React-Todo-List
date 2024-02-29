import  { useEffect, useRef, useState } from "react";

function NewTask({onSubmitHandler}) {
const [task,setTask]  =  useState('');
    let txtBox = useRef(null)
    useEffect(()=>{
        txtBox.current.focus();
    },[task]);
    const submitHandler = event =>{
        event.preventDefault();
        console.log(task);
        onSubmitHandler(task);
        setTask('')
    }
  return (
    <>
      <form onSubmit={submitHandler}
        className="w-1/2 rounded-xl p-5 bg-white mt-5 mx-auto shadow-lg flex flex-row space-y-2 flex-wrap
        md:w-1/4 md:space-x-2 md:flex-nowrap md:space-y-0
        "
        action=""
      >
        <input 
        ref={txtBox}
        onChange={event => setTask(event.target.value)}
        value={task}
        className="focus:outline-indigo-500 w-full p-1 border-2 md:w-3/4"
        placeholder="Task to do?"
        type="text" />
        <input 
        className="hover:cursor-pointer w-full bg-indigo-500 text-white p-1 rounded md:w-1/4"
        type="submit" value="Add"  />
      </form>
    </>
  );
}

export default NewTask;
