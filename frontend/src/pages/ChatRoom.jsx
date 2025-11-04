import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { connectWS } from "../ws";

export const ChatRoom = () => {
  let location = useLocation();
  const name = location.state;
  const socket =useRef(null)

  useEffect(() => {
    console.log(name);
    socket.current=connectWS()
    socket.current.on('connect',()=>{
      socket.current.emit('joinRoom',name)
    })
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center w-screen">
      <header className="h-[7%] gap-2 flex items-center justify-between p-2 bg-white w-full">
        <div className="flex items-center justify-start gap-2" >
          <div className="bg-green-900 flex items-center justify-center aspect-square rounded-full overflow-hidden p-2 text-white">
            <p className="p-1 text-sm font-semibold">{name.charAt(0).toUpperCase()}</p>
          </div>
          <p className="font-semibold text-sm">Group chat</p>
        </div>
        <div className="text-sm text-gray-500" >
            Signed in as {name}
        </div>
      </header>
      <div className="h-full w-full bg-gray-200"></div>
      <footer className="w-full p-2 fixed bg-white bottom-0">
        <div className=" flex border rounded-full p-1 items-center justify-between border-gray-300">
            <input className="w-full px-3 font-semibold text-gray-700 outline-none placeholder:text-gray-400 placeholder:text-xs" type="text" placeholder="Type a message..." />
            <button className="bg-green-400 p-1 px-3 rounded-full text-white text-sm font-semibold" >Send</button>
        </div>
      </footer>
    </div>
  );
};
