import "./Message.css";

function Message({ message }) {

  return (

    <div
      className={
        message.sender === "user"
          ? "message user"
          : "message ai"
      }
    >

      <p>{message.text}</p>

    </div>

  );

}

export default Message;