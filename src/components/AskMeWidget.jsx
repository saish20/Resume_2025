import React, { useState, useRef, useEffect } from "react";
import { askLLM } from "../api/askllm";

export default function AskMeAnythingWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const reply = await askLLM(input);
      const botMessage = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("LLM Error:", error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[500px] border rounded bg-white shadow p-4">
      {/* Message history (scrollable) */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md ${
              msg.role === "user"
                ? "bg-blue-100 text-right ml-auto max-w-xs"
                : "bg-gray-200 text-left mr-auto max-w-xs"
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Ask something..."
          className="flex-1 border p-2 rounded-l-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
