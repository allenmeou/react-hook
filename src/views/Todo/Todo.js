import "./Todo.scss";
const Todo = (props) => {
  const { todos, title, handleDeleteDataTodos } = props;

  const handleDeleteTodo = (id) => {
    handleDeleteDataTodos(id);
  };

  return (
    <div className="todo-container">
      <div className="title">{title}</div>
      {todos.map((todo, index) => {
        return (
          <div
            key={todo.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <li style={{ marginRight: 20 }}>
                {todo.id} - {todo.title}
              </li>
            </div>
            <div>
              <button
                style={{ marginRight: 10 }}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
              <button>Edit</button>
            </div>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
