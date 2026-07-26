import Message from "./Message";
import "./ChatWindow.css";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">

      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
        />
      ))}

    </div>
  );
}

export default ChatWindow;