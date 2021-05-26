import React from 'react';

import { Lable, Textarea } from './TextareaFormStyle';
import { ITextareaFormProps } from '../../../interfaces/index';

const LabelForm: React.FC<ITextareaFormProps> = ({ text, value, name, onInputsHandler }) => {
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
      />
    </Lable>
  );
};

export default LabelForm;
