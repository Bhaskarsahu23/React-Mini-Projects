import './Form.css';
import { useState } from 'react';

const Form = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: taskValue,
      id: Math.floor(Math.random() * 10000),
      taskCompleted: true,
    };
    console.log(task);
    setTasks([...tasks, task]);
  };

  return (
    <form onSubmit={handelSubmit} className="form__container">
      <input
        onChange={(e) => setTaskValue(e.target.value)}
        type="text"
        id="taskinput"
        placeholder="Write New To Do"
        className="form__input"
      />
      <button type="submit" className="form__btn">
        Add
      </button>
    </form>
  );
};
export default Form;
