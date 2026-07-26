import { useState, useEffect } from "react";
import { sendChat } from "../../services/chatService";
import "./ChatInput.css";

function ChatInput({ messages, setMessages, setAvatarState, setEmotion }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setText("");
    setLoading(true);

    const response = await sendChat(text);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: response.reply,
      },
    ]);

    setEmotion(response.emotion || "neutral");
    setAvatarState(
      response.avatarState ?? {
        eyes: "calm",
        mouth: "neutral",
        brows: "relaxed",
      }
    );
    setLoading(false);
  };

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };
  };

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const userMessage = {
      sender: "user",
      text: `Uploaded file: ${file.name}`,
      file,
    };

    setMessages((prev) => [...prev, userMessage]);
    // clear the input so the same file can be re-selected if needed
    e.target.value = null;
  };

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");

    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.warn("Failed to parse saved chatHistory", e);
      }
    }
  }, []);

  return (
    <>
      <div className="chat-input">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask anything..."
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button onClick={sendMessage}>Send</button>
        <button onClick={startVoice}>🎤</button>
        <button
          onClick={() => {
            setMessages([]);
            localStorage.removeItem("chatHistory");
          }}
        >
          Clear
        </button>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={handleFileUpload}
          className="chat-file-input"
        />

      </div>

      {loading && <p>🤖 AI is typing...</p>}
    </>
  );
}

export default ChatInput;