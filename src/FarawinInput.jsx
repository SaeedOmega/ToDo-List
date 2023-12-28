import { useZustand } from "./App";

export default function FarawinInput() {
  const inp = useZustand((state) => state.inp);
  const setInp = useZustand((state) => state.setInp);
  const setFirstUse = useZustand((state) => state.setFirstUse);

  return (
    <input
      value={inp}
      id="1"
      className="p-2 rounded-xl bg-zinc-500 border border-black focus:outline-none placeholder-slate-950 placeholder-opacity-60"
      placeholder="Type"
      onInput={(e) => {
        setFirstUse(false);
        setInp(e.target.value);
      }}
    />
  );
}
