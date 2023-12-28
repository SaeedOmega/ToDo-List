import { useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";
import { create } from "zustand";

export const useZustand = create((set) => ({
  nameList: [],
  inp: "",
  firstUse: true,
  setInp: (anyThing) => set((state) => ({ inp: anyThing })),
  setFirstUse: (anyThing) => set((state) => ({ firstUse: anyThing })),
  increaseNameList: (name) =>
    set((state) => ({ nameList: [...state.nameList, name] })),
  deleteName: (list, index) =>
    set({ nameList: list.filter((e, ind) => ind != index) }),
  nameValid: (name) => {
    if (name.length < 3) return false;
    return true;
  },
}));

function App() {
  1;
  const [nameList, setNameList] = useState([]);
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-zinc-500 p-10 rounded-xl w-[800px]">
      <Form nameList={nameList} setNameList={setNameList} />
      <List nameList={nameList} setNameList={setNameList}></List>
    </div>
  );
}

export default App;
