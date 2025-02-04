import React, { useState } from "react";

const Chats = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages([...messages, input]);
        setInput("");
    };

    return (
        <div className="chat-container" style={{ padding: "20px", border: "1px solid #ccc", width: "300px" }}>
            <h3>Chat</h3>
            <div className="chat-messages" style={{ minHeight: "150px", marginBottom: "10px", border: "1px solid #ddd", padding: "10px" }}>
                {messages.map((msg, index) => (
                    <p key={index} style={{ background: "#f1f1f1", padding: "5px", borderRadius: "5px" }}>{msg}</p>
                ))}
            </div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type a message..." 
                style={{ width: "80%", padding: "5px" }} 
            />
            <button onClick={sendMessage} style={{ marginLeft: "5px", padding: "5px" }}>Send</button>
        </div>
    );
};

export default Chats;
