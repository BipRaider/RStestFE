import React from 'react';

import { IChatProps } from '../interfaces';

import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

import ChatS from './ChatStyle';
const Chat: React.FC<IChatProps> = ({ messages, onAddMessage }) => {
  return (
    <ChatS>
      <MessageList messages={messages} />
      <MessageForm onAddMessage={onAddMessage} />
    </ChatS>
  );
};

export default Chat;
