import { create } from 'zustand';
import { IMessagesState } from './types';
import { initialData } from './initialData';
import { persist } from 'zustand/middleware';

const useMessages = create<IMessagesState>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'chat-storage',
    }
  )
);

export default useMessages;
