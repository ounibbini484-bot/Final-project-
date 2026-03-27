import React, { useRef, useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", sender: "bot" }
  ]);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleQuickReply = (question) => {
    const userMsg = { text: question, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let botResponse = "I am not sure how to answer that yet!";

      if (question === "Where is my order?") {
        botResponse =
          "Your order #100064063 is currently out for delivery and should arrive within 20 minutes🛵";
      } else if (question === "Cancel order") {
        botResponse = "Cancelling your order, see you again 😊";
      } else if (question === "Where is the restaurant?") {
        botResponse = "Inside Dubai Festival City - United Arab Emirates 🍝";
      } else if (question === "Talk to human") {
        botResponse = "Connecting to you an agent... Please hold on 👱🏻";
      }

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle-btn" onClick={toggleChat}>
        {" "}
        {!isOpen ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Support Chat</span>
            <button className="chatbot-close-btn" onClick={toggleChat}>
              &times;
            </button>
          </div>

          <div className="chatbot-messges">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {msg.sender === "bot" && (
                  <img
                    src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg"
                    alt="bot"
                    className="chat-avatar"
                  />
                )}
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-quick-replies">
            <button
              className="quick-reply-btn"
              onClick={() => handleQuickReply("Where is my order?")}
            >
              Where is my order?
            </button>

            <button
              className="quick-reply-btn"
              onClick={() => handleQuickReply("Cancel order")}
            >
              Cancel order
            </button>

            <button
              className="quick-reply-btn"
              onClick={() => handleQuickReply("Where is the restaurant?")}
            >
              Where is the restaurant?
            </button>

            <button
              className="quick-reply-btn"
              onClick={() => handleQuickReply("Talk to human")}
            >
              Talk to human
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;