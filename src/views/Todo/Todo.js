const Todo = (props) => {
  const todos = props.todos;

  return (
    <div className="todo-container">
      <div className="title">{props.title}</div>
      {todos.map((item, index) => {
        return (
          <li key={item.id}>
            {item.id} - {item.title}
          </li>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
