
import './App.css';
import {useState} from 'react';


function App() {
  const [curTask, setCurTask] = useState('');
  const [allTask, setAllTask] = useState([]);
  const [count, setcount] = useState(0);
  const btnClick =()=>{
    let templist=[...allTask,curTask];
    setAllTask(templist);
    setCurTask('');
    setcount(count+1);
  }
  function dlt(index){
    let templist=[...allTask];
    templist.splice(index,1);
    setcount(count-1);
    setAllTask(templist);

  }


  return (
    
<>
    <h1>Todo App</h1>
    <div>
      Enter Task:
      <br/>
      <input type='text' placeholder='Enter here' value={curTask} onChange={(e)=>setCurTask(e.target.value)}/>
      <button onClick={btnClick}>Add</button>
      <br/>
    </div>
    <div>
      <h4>Total Tasks: {count}</h4>
      <h3>Tasks:</h3>
      <ol>
        {allTask.map((task,i)=><li>{task}<button onClick={dlt}>Delete</button></li>)}
      </ol>
    </div>
    </>


  );

  }
export default App;
