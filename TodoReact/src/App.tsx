import { useState } from "react";
import "./App.css";
import DisplayTodo from "./Components/DisplayTodo";
import Todos from "./Components/Todos";
import { TodoType } from "./Types/types";
function App() {
  const Todositem: TodoType[] = [];
  const [Todoitem, setTodoitem] = useState(Todositem);
  const settodo = (e: string) => {
    const item: { id: number; Todo: string; completed: boolean } = {
      id: Math.floor(Math.random() * 1001),
      Todo: e,
      completed: false,
    };
    const newTodo = [...Todoitem, item];
    setTodoitem(newTodo);
  };
  return (
    <div className="container">
      <DisplayTodo settodo={settodo} />
      <Todos setTodo={setTodoitem} todoVar={Todoitem} />
    </div>
  );
}

export default App;
