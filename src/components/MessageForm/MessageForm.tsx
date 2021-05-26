import React, { useState } from 'react';

import { IMassageFormProps, TUserMessage } from '../../interfaces';

import ButtonForm from './ButtonForm';
import NameForm from './NameForm';
import TextareaForm from './TextareaForm';

import { Form } from './MessageFormStyle';

const rg = new RegExp('^[а-яА-Яa-zA-Z0-9._-]{2,20}$');

const MessageForm: React.FC<IMassageFormProps> = ({ onAddMessage }) => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid({ name, message })) {
      onAddMessage({ name, message });

      clearForm();
    }
  };

  const inputsHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({
    target: { name, value },
  }) => {
    if (name === 'name') {
      setName(value);
      return;
    }
    setMessage(value);
  };

  const isValid = ({ name, message }: TUserMessage) => {
    if (!rg.test(name)) {
      alert('No corrected name ');
      return false;
    }
    if (name.length < 2 || name.length > 20) {
      alert('Enter a name from 2 to 20 characters');
      return false;
    }
    if (message.length < 3 || message.length > 450) {
      alert('Enter a message from 3 to 450 characters');
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setMessage('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <NameForm
        value={name}
        onInputsHandler={inputsHandler}
        nameInput={'name'}
        ph={'Enter your name'}
        text={'Name:'}
        minL={2}
        maxL={20}
      />

      <TextareaForm
        value={message}
        onInputsHandler={inputsHandler}
        name={'message'}
        text={'Message:'}
      />
      <div>
        <ButtonForm />
      </div>
    </Form>
  );
};

export default MessageForm;
