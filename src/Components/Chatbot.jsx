import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Bot, Sparkles } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Swagotom! Ami apnar Study Partner sahayok 🤖", sender: "bot" },
    { text: "Kivabe sahajjo korte pari?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    hi: "Hello! Kemon achen?",
    "kivabe partner khujbo":
      "Find Partner page-e jan → Subject, Level, Mode select korun → Search korun!",
    "profile edit": "My Profile → Edit Profile → poriborton kore Save korun.",
    contact: "Jekono somossyay: support@studypartner.com",
    free: "He! Sob feature 100% free!",
    offline: "He! 'In-Person' mode select korun.",
    delete: "My Connections → Remove Partner click korun.",
    "dark mode": "Upore dan kone 🌙 icon-e click korun.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let reply = "Dukkito, bujhte parini. Arektu sposto kore bolun?";
      const lowerInput = input.toLowerCase();

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerInput.includes(key)) {
          reply = value;
          break;
        }
      }

      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    }, 800);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-2 md:left-4 bg-yellow-400 hover:bg-yellow-500 text-[#001F46] p-1 md:p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
        aria-label="Open Chatbot"
      >
        {isOpen ? <X size={28} /> : <Bot size={32} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed z-50 flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-2xl bottom-24 left-6 w-80 h-[450px] dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
          {/* Header */}
          <div className="bg-[#001F46] text-white p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-1.5 rounded-full text-[#001F46]">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold">Study Partner Bot</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] opacity-80">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 transition-colors rounded-full hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 text-sm shadow-sm transition-all ${
                    msg.sender === "user"
                      ? "bg-yellow-400 text-[#001F46] rounded-2xl rounded-tr-none font-medium"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-600"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-400 ">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Apnar prosno likhun..."
              className="flex-1 px-4 py-2 text-sm border rounded-full dark:light dark:text dark:text-white"
            />
            <button
              onClick={handleSend}
              className="p-2 transition-transform bg-yellow-400 rounded-full text-[#001F46] hover:scale-110 active:scale-95 shadow-md cursor-pointer"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
