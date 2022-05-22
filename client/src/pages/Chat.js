import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="w-96 h-96">
      <div className="h-12 rounded-t-md bg-gray-800">
        <p className="grid text-white place-items-center p-2 text-xl">Chat with Counselor</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="w-full h-full overflow-y-scroll overflow-x-hidden">
          {messageList.map((messageContent) => {
            return (
              <div
                className="h-auto p-2 flex"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="w-auto h-auto bg-green-600 rounded text-white flex items-center mr-1 ml-1 pr-1 pl-1 break-words text-xl px-4 py-1">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage} className="bg-[#FFAEC9]">&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
