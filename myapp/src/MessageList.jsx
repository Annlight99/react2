import React from "react";
import Message from "./Message";



export default function MessageList({ list }) {
  return (
    <div className="messageList">
      {list.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
}