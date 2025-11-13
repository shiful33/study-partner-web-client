import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { SiWechat } from "react-icons/si";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "স্বাগতম! আমি আপনার স্টাডি পার্টনার সহকারী 🤖", sender: "bot" },
    { text: "কীভাবে সাহায্য করতে পারি?", sender: "bot" },
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
    হাই: "হ্যালো! কেমন আছেন? 😊",
    "কীভাবে পার্টনার খুঁজব":
      "Find Partner পেজে যান → সাবজেক্ট, লেভেল, মোড সিলেক্ট করুন → Search করুন!",
    "প্রোফাইল এডিট": "My Profile → Edit Profile → পরিবর্তন করে Save করুন।",
    কন্টাক্ট: "যেকোনো সমস্যায়: support@studypartner.com",
    ফ্রি: "হ্যাঁ! সব ফিচার ১০০% ফ্রি!",
    অফলাইন: "হ্যাঁ! 'In-Person' মোড সিলেক্ট করুন।",
    ডিলিট: "My Connections → Remove Partner ক্লিক করুন।",
    "ডার্ক মোড": "উপরে ডান কোণে 🌙 আইকনে ক্লিক করুন।",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let reply = "দুঃখিত, বুঝতে পারিনি। আরেকটু স্পষ্ট করে বলুন? 😅";
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
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-[#001F46] p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
        aria-label="Open Chatbot"
      >
        {isOpen ? <FaTimes size={28} /> : <FaRobot size={40} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed z-50 flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-2xl bottom-20 right-6 w-80 h-96 dark:bg-gray-800 rounded-2xl">
          <div className="bg-[#001F46] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaRobot size={28} />
              <div>
                <h3 className="font-bold">Study Partner Bot</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white rounded hover:bg-white/20"
            >
              <FaTimes />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-yellow-400 text-[#001F46] rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t dark:border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="টাইপ করুন..."
              className="flex-1 text-sm rounded-full input input-bordered input-sm"
            />
            <button
              onClick={handleSend}
              className="rounded-full btn btn-warning btn-sm"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
