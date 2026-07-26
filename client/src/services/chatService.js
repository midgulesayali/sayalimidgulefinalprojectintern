import axios from "axios";

const API = "http://127.0.0.1:8000/chat";

export async function sendChat(message) {
  try {
    const response = await axios.post(API, {
      message,
    });

    return {
      reply: response.data.reply,
      emotion: response.data.emotion,
      avatarState: response.data.avatar_state,
    };
  } catch (error) {
    console.error(error);

    return {
      reply: "Unable to connect to AI server.",
      emotion: "neutral",
      avatarState: {
        eyes: "calm",
        mouth: "neutral",
        brows: "relaxed",
      },
    };
  }
}
