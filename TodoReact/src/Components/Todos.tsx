import { useState } from "react";
import { TodoType } from "../Types/types";
type StateType = {
  todoVar: TodoType[];
  setTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const Todos = ({ todoVar, setTodo }: StateType) => {
  const [ren, setren] = useState(false);
  const line = (id: number) =>
    todoVar.filter(
      (items) => items.id === id && (items.completed = !items.completed),
      setren(!ren)
    );
  const dlt = (id: number) => {
    const newTodo = todoVar.filter((items) => items.id !== id);
    setTodo(newTodo);
  };
  return (
    <>
      <div className="Todocontainer">
        {todoVar.length == 0 ? (
          <p id="para">No Todos</p>
        ) : (
          todoVar.map((items) => (
            <div className="todo">
              <input onChange={() => line(items.id)} type="checkbox" />
              <p className={`${items.completed == true && "textCut"} `}>
                {items.Todo}
              </p>
              <button onClick={() => dlt(items.id)} className="deleteBtn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Todos;
