
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
        "max-w-[80%] p-3 rounded-lg mb-2 animate-slide-in",
        isBot 
          ? "bg-gray-100 self-start rounded-tl-none" 
          : "bg-campus-500 text-white self-end rounded-tr-none"
      )}
    >
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
