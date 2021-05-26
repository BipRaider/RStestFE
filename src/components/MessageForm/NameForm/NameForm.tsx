import React from 'react';
import { INameFormProps } from '../../../interfaces';

import { Label, Input } from './NameFormStyle';

const NameForm: React.FC<INameFormProps> = ({
  text,
  value,
  nameInput,
  ph,
  onInputsHandler,
  maxL,
  minL,
}) => {
  return (
    <Label>
      {text}
      <Input
        placeholder={ph}
        type="text"
        maxLength={maxL}
        minLength={minL}
        name={nameInput}
        required
        value={value}
        onChange={e => onInputsHandler(e)}
      />
    </Label>
  );
};

export default NameForm;
