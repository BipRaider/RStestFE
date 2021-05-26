import React from 'react';

import MessageListItem from './Item';
import { TMessageList } from '../../interfaces';

import { Ul } from './MessageListStyle';

const MessageList: React.FC<TMessageList> = ({ messages }: TMessageList) => {
  return (
    <Ul>
      {messages.map(message => (
        <MessageListItem key={message._id} {...message} />
      ))}
    </Ul>
  );
};

export default MessageList;
