export interface IMessage {
  id: string;
  name: string;
  text: string;
  time: string;
  position?: string;
}

export interface IMessagesData {
  [key: string]: {
    messages: IMessage[];
  };
}

export interface IMessagesState {
  data: IMessagesData;
  addMessage: (date: string, msg: IMessage) => void;
}
