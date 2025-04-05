
import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div 
      className={cn(
        "max-w-[80%] p-3 rounded-lg mb-3 animate-slide-in shadow-sm",
        isBot 
          ? "bg-white border border-gray-100 self-start rounded-tl-none" 
          : "bg-gradient-to-r from-campus-500 to-campus-600 text-white self-end rounded-tr-none"
      )}
    >
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
