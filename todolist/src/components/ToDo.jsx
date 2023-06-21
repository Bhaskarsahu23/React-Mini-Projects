import './ToDo.css';
import Form from './Form';
import ToDoList from './ToDoList';
import { useState } from 'react';

const ToDo = () => {
  const todoData = [
    { title: 'Learn ReactJs', id: '4545', taskCompleted: false },
    { title: 'Exercise', id: '4051', taskCompleted: false },
    { title: 'code todo list', id: '9565', taskCompleted: true },
  ];

  const [tasks, setTasks] = useState([...todoData]);

  function handelDelect(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="todo__container">
      <div className="todo__form">
        <Form tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="todo-list__container">
        {tasks.map((todo) => {
          return (
            <ToDoList
              title={todo.title}
              completed={todo.taskCompleted}
              id={todo.id}
              todo={todo}
              handelDelect={handelDelect}
              key={todo.id}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ToDo;
