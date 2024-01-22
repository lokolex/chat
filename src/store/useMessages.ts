import { create } from 'zustand';
import { IMessagesState, IMessage } from './types';
import { initialData } from './initialData';
import { persist } from 'zustand/middleware';

const useMessages = create<IMessagesState>()(
  persist(
    (set, get) => ({
      data: initialData,
      addMessage: (date, msg) =>
        set((state) => {
          const dates = Object.keys(state.data);
          if (dates.includes(date)) {
            const newData = { ...state.data };
            newData[date].messages = [...newData[date].messages, msg];
            return {
              newData,
            };
          } else {
            return {
              data: { ...state.data, [date]: { messages: [msg] } },
            };
          }
        }),
      getAllMessages: () => {
        const messages: IMessage[] = [];
        Object.values(get().data).forEach((item) => {
          messages.push(...item.messages);
        });
        return messages;
      },
      deleteMessage: (date, id) =>
        set((state) => {
          const newMessages = state.data[date].messages.filter((msg) => msg.id !== id);

          if (!newMessages.length) {
            delete state.data[date];
            const newData = { ...state.data };
            return newData;
          } else {
            return {
              data: {
                ...state.data,
                [date]: { messages: newMessages },
              },
            };
          }
        }),
    }),
    {
      name: 'chat-storage',
    }
  )
);

export default useMessages;
