import React from 'react';
import ChatApp from './App';

export const ChatModule: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)]">
      <ChatApp />
    </div>
  );
};

export default ChatModule;
