import "../App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function WishlistApp() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState();

  const onTodoInputChange = (e) => {
    setTodo(e.target.value);
  };

  const onAddTodoClick = () => {
    setTodoList([...todoList, { id: uuid(), todo: todo, isCompleted: false }]);
    setTodo("");
  };

  const onDeleteClick = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const onTodoCheckChange = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>My Wishlist</h1>
      <div>
        <input
          value={todo}
          onChange={onTodoInputChange}
          placeholder="Add your wishlist here..."
        />
        <button onClick={onAddTodoClick}>Add</button>
      </div>
      <div>
        {todoList.map((item) => (
          <div>
            <label>
              <input
                onClick={() => onTodoCheckChange(item.id)}
                type="checkbox"
              />
              <span className={`${item.isCompleted ? "strike-through" : ""}`}>
                {item.todo}
              </span>
            </label>
            <button onClick={() => onDeleteClick(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistApp;
