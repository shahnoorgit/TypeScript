import "./style.css";
interface Todo {
  title: string;
  isCompleted: boolean;
  id: string;
}

const todos: Array<Todo> = [];

const TodoContainer = document.querySelector(
  ".Todocontainer"
) as HTMLDivElement;

const todoinput = document.querySelector("#inputF") as HTMLInputElement;

const myform = document.querySelector("#myform") as HTMLFormElement;

const Paralist = document.querySelector("#para") as HTMLParagraphElement;

const generateItems = (title: string, isCompleted: boolean, id: string) => {
  const TODO: HTMLDivElement = document.createElement("div");
  TODO.className = "todo";

  //creating a checkbox
  const checkbox: HTMLInputElement = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "isCompleted";
  checkbox.checked = isCompleted;
  checkbox.onchange = () => {
    todos.find((items) => {
      if (items.id === id) items.isCompleted = checkbox.checked;
    });
    Paragraph.className = checkbox.checked ? "textCut" : "";
  };

  // creating a Paragraph for title
  const Paragraph: HTMLParagraphElement = document.createElement("p");
  Paragraph.innerText = title;
  Paragraph.className = checkbox.checked ? "textCut" : "";

  //creating Delete button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerHTML = "X";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    deletebtn(id);
  };

  //Apending all in TODO div

  TODO.append(checkbox, Paragraph, btn);
  TodoContainer.append(TODO);
};

const rendertodo = (todos: Todo[]) => {
  TodoContainer.innerText = "";
  todos.forEach((items) => {
    generateItems(items.title, items.isCompleted, items.id);
  });
};
myform.onsubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const todoitem: Todo = {
    title: todoinput.value,
    isCompleted: false,
    id: String(Math.random() * 100),
  };
  todos.push(todoitem);
  todoinput.value = " ";
  rendertodo(todos);
};
const deletebtn = (id: string) => {
  const idx = todos.findIndex((items) => items.id === id);
  todos.splice(idx, 1);
  rendertodo(todos);
};
