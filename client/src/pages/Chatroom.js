import { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function Chatroom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="grid place-items-center min-h-screen">
      {!showChat ? (
        <div className="flex text-center flex-col">
          <h3 className="text-3xl font-semibold pb-4">Join the room</h3>
          <input
            type="text"
            placeholder="Your name"
            className="w-64 h-10 py-2 m-2 rounded p-1 text-xl border-2 border-black"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter or Create a Room ID"
            className="w-64 h-10 py-2 m-2 rounded p-1 text-xl border-2 border-black"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom} className="w-64 h-12 m-2 rounded p-1 text-xl bg-[#FFAEC9] text-white cursor-pointer">Join a Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chatroom;
