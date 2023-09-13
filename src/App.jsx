import { useCallback, useReducer,useDebugValue} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import taskReducer from '@/taskReducer.jsx'
import {TaskLists} from '@/TaskList'



function App() {
  const [tasks , dispatch] = useReducer(taskReducer,initialTasks);
  const clickCallback = useCallback(()=>{
    alert('usecallback')
  },[tasks]);
  tst();
 
  function tst(){
    useDebugValue('tstts');
  } 
  function handleAddTask(text){
    dispatch({
      type1 : 'added',
      id: nextid,
      text:text
    })
  }

  function handleChangeTask(task){
    // console.log('..:' + task);
    dispatch({
      type1 : 'changed',
      task : task
    })
  }

  function handleDeleteTask(taskid){
    dispatch({
      type1 : 'deleted',
      id:taskid
    })
  }
  return (
    <>
      <h1>布拉格的行程安排</h1>
      {/* <AddTask onAddTask={handleAddTask}/> */}
      <TaskLists tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}></TaskLists>
      <button onClick={() => {clickCallback()}}>usecallback</button>
    </>
  )
}
let nextid=3
const initialTasks = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false }
];
export default App
