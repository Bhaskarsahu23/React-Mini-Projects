import { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTask] = useState([
    {
      id: 45454,
      name: 'Bhaskar',
      discription: 'This is an discription',
      completed: false,
    },
    {
      id: 7581,
      name: 'Vaibhav',
      discription: 'This is an discription',
      completed: true,
    },
    {
      id: 9586,
      name: 'Ankit',
      discription: 'This is an discription',
      completed: false,
    },
    {
      id: 4856,
      name: 'Raja',
      discription: 'This is an discription',
      completed: false,
    },
  ]);

  const [show, setShow] = useState(false);

  function handelDel(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <h1 className="heading">To Do list</h1>
      <div className="list__container">
        <ul>
          <button onClick={() => setShow(!show)}>Show</button>
          {show &&
            tasks.map((task) => {
              return (
                <li key={task.id}>
                  <div>
                    <h1>{task.name}</h1>
                    <p>{task.discription}</p>
                  </div>
                  <button className="btn" onClick={() => handelDel(task.id)}>
                    Delect
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default ToDoList;
