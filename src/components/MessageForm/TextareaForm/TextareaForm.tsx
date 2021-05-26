import React from 'react';

import { Lable, Textarea } from './TextareaFormStyle';
import { ITextareaFormProps } from '../../../interfaces/index';

const TextareaForm: React.FC<ITextareaFormProps> = ({
  text,
  value,
  name,
  onInputsHandler,
  onSubmitHandler,
}) => {
  const keyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' || e.ctrlKey) {
      onSubmitHandler(e);
    }
  };

  return (
    <Lable>
      {text}
      <Textarea
        placeholder={'Enter your message'}
        maxLength={450}
        minLength={2}
        name={name}
        required
        value={value}
        onChange={e => onInputsHandler(e)}
        rows={2}
        onKeyPress={keyPressHandler}
      />
    </Lable>
  );
};

export default TextareaForm;
