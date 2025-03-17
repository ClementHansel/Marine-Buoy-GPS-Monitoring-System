"use client";

import React, { useState } from "react";
import ChatHistory from "@/components/cortheaAI/ChatHistory";
import ChatInput from "@/components/cortheaAI/ChatInput";
import ChatMessages from "@/components/cortheaAI/ChatMessages";
import mockResponses from "@/lib/cortheaAI/mockData";

type Message = {
  role: "user" | "ai";
  content: string;
};

const CortheaAIPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (message: string) => {
    if (!message.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: message },
    ];
    setMessages(newMessages);

    // Mock AI response (Replace with real AI logic later)
    setTimeout(() => {
      const aiResponse =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];
      setMessages([...newMessages, { role: "ai", content: aiResponse }]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for Chat History */}
      <aside className="w-1/4 p-4 bg-white shadow-md">
        <ChatHistory />
      </aside>

      {/* Chat Panel */}
      <main className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-semibold mb-4">Corthea AI</h1>
        <div className="flex-1 overflow-auto p-4 bg-white rounded-lg shadow-md">
          <ChatMessages messages={messages} />
        </div>
        <ChatInput onSendMessage={sendMessage} />
      </main>
    </div>
  );
};

export default CortheaAIPage;
