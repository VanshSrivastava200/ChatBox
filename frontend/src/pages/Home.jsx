import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Home = () => {

  const [name, setName] = useState("");
  let navigate=useNavigate()

  const handleSubmit = (e) => {
    if (name === "") return;
    e.preventDefault();
    console.log(name);
    navigate('/chatroom', { state: name })
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 w-screen ">
      <div className="bg-white shadow-lg border border-gray-300 rounded-lg flex flex-col items-center gap-2 p-3">
        <p className="text-lg font-semibold">Enter name to proceed</p>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          className="border-2 font-semibold outline-none placeholder:text-gray-500 placeholder:font-[400] text-center border-gray-700 rounded-md bg-gray-200  p-1"
          type="text"
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="w-full border hover:bg-green-700 font-semibold transition-all duration-200 border-green-800 bg-green-400 p-1 rounded-md"
        >
          Enter
        </button>
      </div>
    </div>
  );
};
