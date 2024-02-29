import {  useRef, useState } from "react";
import NewTask from "./NewTask";

function App() {
  const [taskList, setTaskList] = useState([]);
  const getNewTask = (task) => {
    setTaskList((prev) => [task, ...prev]);
  };
    let getPara =useRef(null);
    const changeStyle = () =>
    {
      getPara.current.style.textDecorationLine = 'line-through'
    }
  return (
    <>
      <h1 className="text-indigo-600 text-3xl text-center mt-5 font-bold">
        My Todo&apos;s
      </h1>
      <NewTask onSubmitHandler={getNewTask} />
      {taskList.length === 0 ? (
        <p className={`mt-5 text-xl mx-auto w-1/2 md:w-1/4 text-center bg-white shadow-lg rounded-lg p-1`}>
          No Tasks are assigned yet.
        </p>
      ) : (
        <ul className="bg-slate-100 w-1/2 md:w-1/4 mx-auto rounded p-5 mt-5">
          {taskList.map((task, index) => (
            <li
              className="list-none flex flex-row space-x-2 w-full
  mx-auto  rounded p-5"
              key={index + "a"}
            >
              <p
              ref={getPara}
              className="w-3/4 italic">{task}</p>
              <button
              onClick={changeStyle} 
              className="rounded bg-red-500 text-white p-1">Done</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
