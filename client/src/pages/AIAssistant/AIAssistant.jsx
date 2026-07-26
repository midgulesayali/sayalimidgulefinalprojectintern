import { useState } from "react";
import ChatWindow from "../../components/AIAssistant/ChatWindow";
import ChatInput from "../../components/AIAssistant/ChatInput";
import AIAvatar from "../../components/AIAvatar/AIAvatar";
import "./AIAssistant.css";

function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm your AI Career Assistant. How can I help you today?",
    },
  ]);
  const [avatarState, setAvatarState] = useState({
    eyes: "calm",
    mouth: "neutral",
    brows: "relaxed",
  });
  const [emotion, setEmotion] = useState("neutral");

  return (
    <div className="assistant-page">
      <h1>AI Career Assistant</h1>

      <div className="assistant-grid">
        <div className="assistant-avatar-panel">
          <AIAvatar avatarState={avatarState} />
          <div className="assistant-emotion-badge">Current mood: {emotion}</div>
        </div>

        <ChatWindow messages={messages} />
      </div>

      <ChatInput
        messages={messages}
        setMessages={setMessages}
        setAvatarState={setAvatarState}
        setEmotion={setEmotion}
      />
    </div>
  );
}

export default AIAssistant;