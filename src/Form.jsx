import FarawinInput from "./FarawinInput";
import Button from "./Button";
import { useRef, useState } from "react";
import { useZustand } from "./App";

export default function Form() {
  const inp = useZustand((state) => state.inp);
  const setInp = useZustand((state) => state.setInp);
  const nameList = useZustand((state) => state.nameList);
  const firstUse = useZustand((state) => state.firstUse);
  const setFirstUse = useZustand((state) => state.setFirstUse);
  const setNameList = useZustand((state) => state.setFirstUse);
  const nameValid = useZustand((state)=>state.nameValid)

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-6">
        <label htmlFor="1" className="self-start">
          Name:
        </label>
        <FarawinInput />
        {!nameValid(inp) && !firstUse && (
          <p className="text-[10px] self-end pr-2 text-red-800">
            Type 3 Character Or More
          </p>
        )}
      </div>
      <Button
        inpValue={inp}
        setFirstUse={setFirstUse}
        setVL={setInp}
        nameList={nameList}
        setNameList={setNameList}
        validation={nameValid(inp)}
      ></Button>
    </div>
  );
}
