import { useZustand } from "./App";

export default function List() {
  const nameList = useZustand((state) => state.nameList);
  const del = useZustand((state)=>state.deleteName);
  
  return (
    <div className="bg-green-500 w-full p-4 flex flex-col items-start rounded-xl gap-4">
      {nameList.length > 0 ? (
        nameList.map((e, index) => (
          <div className="flex gap-4 w-full border border-black p-2 rounded-xl">
            <div>{`${index + 1}.`}</div>
            <div className="grow">{e}</div>
            <div
              className="text-red-600 cursor-pointer hover:text-white hover:underline"
              onClick={() => {
                del(nameList,index);
              }}
            >
              delete
            </div>
          </div>
        ))
      ) : (
        <div className="m-auto text-black">Empty List</div>
      )}
    </div>
  );
}
