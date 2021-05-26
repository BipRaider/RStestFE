'use strick';

export type TMessage = {
  name: string;
  message: string;
  _id?: number | string;
};

export type TUserMessage = {
  name: string;
  message: string;
};

export type TMessageList = {
  messages: TMessage[];
};

export interface IMassageFormProps {
  onAddMessage(newMessage: TMessage): void;
}
export interface IChatProps {
  messages: Array<TMessage>;
  onAddMessage(newMessage: TMessage): void;
}

export interface StandardComponentProps {
  children: React.ReactNode;
}

export interface INameFormProps {
  children?: React.ReactNode;
  text: string;
  value: string;
  nameInput: string;
  ph: string;
  onInputsHandler(e: any): void;
  maxL?: number;
  minL?: number;
}

export interface ITextareaFormProps {
  children?: React.ReactNode;
  text: string;
  value: string;
  name: string;
  onInputsHandler(e: any): void;
}
