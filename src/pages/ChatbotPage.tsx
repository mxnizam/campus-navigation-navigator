
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AuthCheck from '@/components/AuthCheck';
import ChatMessage from '@/components/ChatMessage';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from 'lucide-react';

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi there! I'm your campus assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Sample responses
  const botResponses = [
    "I can help you find locations on campus. Just ask me about any building or facility.",
    "Need help with academic information? I can assist with course details, schedules, and more.",
    "If you're looking for a specific department or faculty member, I can point you in the right direction.",
    "The main library is located in the center of campus. It's open from 8 AM to 10 PM on weekdays.",
    "The cafeteria offers a variety of meal options. The lunch hours are from 11 AM to 2 PM.",
    "Student services is located in Building C. They can help with ID cards, enrollment issues, and general inquiries.",
    "I don't have that information right now, but I'm constantly learning. Please check back later!",
  ];
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot thinking
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <AuthCheck>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-grow container px-4 md:px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Campus Assistant</h1>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-200 h-[70vh] flex flex-col">
              <div className="flex-grow overflow-y-auto p-4">
                <div className="flex flex-col">
                  {messages.map((message, index) => (
                    <ChatMessage 
                      key={index} 
                      message={message.text} 
                      isBot={message.isBot} 
                    />
                  ))}
                  {isTyping && (
                    <div className="bg-gray-100 self-start rounded-lg p-3 mb-2 max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className="border-t border-gray-200 p-4">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow"
                  />
                  <Button type="submit" className="shrink-0">
                    <SendHorizontal size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthCheck>
  );
};

export default ChatbotPage;
