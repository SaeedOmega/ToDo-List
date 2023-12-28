import { useZustand } from "./App";

export default function Button() {
  const increasNameList = useZustand((state) => state.increaseNameList);
  const inp = useZustand((state) => state.inp);
  const nameValid = useZustand((state) => state.nameValid);
  const setInp = useZustand((state) => state.setInp);
  const setFirstUse = useZustand((state) => state.setFirstUse);

  return (
    <button
      className="active:bg-white active:text-black border border-black p-4 rounded-xl hover:bg-gray-400 transition-colors"
      onClick={() => {
        if (nameValid(inp)) {
          increasNameList(inp);
          setInp("");
          setFirstUse(true);
        }
      }}
    >
      {" "}
      Save{" "}
    </button>
  );
}
