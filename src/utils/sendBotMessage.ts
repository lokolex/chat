import { IMessage, IMessagesState } from '@/store/types';
import { createNewMessage } from './createNewMessage';
import { getCurrentDate } from './getCurrentDate';

type AddFunction = IMessagesState['addMessage'];

export const sendBotMessage = (text: string, addFunc: AddFunction) => {
  const currentDate = getCurrentDate();
  const newMessage: IMessage = createNewMessage('Janet', text, true, '', 'Product');
  setTimeout(() => {
    addFunc(currentDate, newMessage);
  }, 1500);
};
