const ToDoList = ({ title, completed, id, handelDelect }) => {
  return (
    <div
      className={`todo-list-item ${
        completed ? 'completed ' : 'not__completed'
      }`}
    >
      <h2>{title}</h2>
      <button onClick={() => handelDelect(id)} className="todo-list__btn">
        Delect
      </button>
    </div>
  );
};

export default ToDoList;
