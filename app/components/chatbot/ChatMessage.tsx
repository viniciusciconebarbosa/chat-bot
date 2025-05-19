import React from 'react';
import { ChatbotMessage } from '../../types';
import { formatTime } from '../../utils';

interface ChatMessageProps {
  message: ChatbotMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 flex items-start pt-1 ${isUser ? 'ml-2' : 'mr-2'}`}>
          <div className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
            <img 
              src={isUser 
                ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                : "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
              }
              alt={isUser ? "User" : "Assistant"}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className={`rounded-2xl px-4 py-2 ${
            isUser 
              ? 'bg-amber-500 text-white rounded-tr-none' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
          }`}>
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          </div>
          <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;