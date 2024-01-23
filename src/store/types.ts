export interface IMessage {
  id: string;
  name: string;
  text: string;
  time: string;
  online: boolean;
  position?: string;
}

export interface IMessagesData {
  [key: string]: {
    messages: IMessage[];
  };
}

export interface EditData {
  isEdit: boolean;
  editText: string;
  editDate: string;
  messageId: string;
}

export interface IMessagesState {
  data: IMessagesData;
  editData: EditData;
  addMessage: (date: string, msg: IMessage) => void;
  getAllMessages: () => IMessage[];
  deleteMessage: (date: string, id: string) => void;
  onEditMessage: (date: string, text: string, messageId: string) => void;
  closeEditMessage: () => void;
  editMessage: (date: string, text: string, messageId: string) => void;
}
