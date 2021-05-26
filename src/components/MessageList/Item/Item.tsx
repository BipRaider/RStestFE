import React from 'react';
import { TMessage } from '../../../interfaces';

import { Li, Name, Message } from './ItemStyle';

const MessageListItem: React.FC<TMessage> = ({ name, message }) => {
  return (
    <Li>
      <Name>{name}</Name>
      <Message>{message}</Message>
    </Li>
  );
};

export default MessageListItem;
