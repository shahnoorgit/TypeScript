import { FormEvent, useRef } from "react";

type StateType = {
  settodo: (e: string) => void;
};
const DisplayTodo = ({ settodo }: StateType) => {
  const inputref = useRef<HTMLInputElement>(null);
  const Valueupp = (e: FormEvent) => {
    e.preventDefault();
    const curInp = inputref.current?.value as string;
    settodo(curInp);
    inputref.current!.value = " ";
  };
  return (
    <>
      <h1>TODO TS</h1>
      <form onSubmit={(e) => Valueupp(e)} id="myform">
        <input
          ref={inputref}
          id="inputF"
          required
          type="text"
          placeholder="title"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default DisplayTodo;
