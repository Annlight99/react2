// import logo from './logo.svg';
import './App.css';
import MessageForm from './MessageForm';
import { useState, useEffect } from "react";
import MessageList from './MessageList';
import Message from './Message';
import Button from './Button';



function App() {
  const botMessage = { author: "bot", message: "very nice" };
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({ author: "", message: "" });


  const createMessage = () => {
    setMessageList([...messageList, message]);
    setMessage({ author: "", message: "" });
  };

  useEffect(() => {
    let timerBot = setTimeout(() => {
      if (
        messageList.length !== 0 &&
        messageList[messageList.length - 1].author === "me"
      ) {
        setMessageList([...messageList, botMessage]);
      }
      clearTimeout(timerBot);
    }, 2000);
  },
    [messageList]);

  return (
    <div className="App">
      <div className="formMessage">
        <MessageList list={messageList} />

        <MessageForm
          value={message.message}
          onChange={(e) =>
            setMessage({ author: "me", message: e.target.value })
          }
          type="text"
          placeholder="наберите сообщение"
        />
        <Button>
          variant="contained"
          color="success"
          type="search"
          onClick={createMessage}
          style={{ margin: "15px 0px" }}
          Создать сообщение
        </Button>

  // </div>
  // </div>
  );
}

export default App;









