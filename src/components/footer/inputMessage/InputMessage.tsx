'use client';

import { useState } from 'react';
import { Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import useMessages from '@/store/useMessages';
import { getCurrentDate } from '@/utils/getCurrentDate';
import PrefixComponent from '../prefixComponent/PrefixComponent';
import IconComponent from '@/components/iconComponent/IconComponent';
import { createNewMessage } from '@/utils/createNewMessage';

import styles from './InputMessage.module.css';
import { sendBotMessage } from '@/utils/sendBotMessage';

const InputMessage = () => {
  const [value, setValue] = useState('');
  const addMessage = useMessages((state) => state.addMessage);

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value.trimStart());
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) return;
    const currentDate = getCurrentDate();
    const newMessage = createNewMessage('user', value, true);
    addMessage(currentDate, newMessage);
    setValue('');
    sendBotMessage('Hello World!', addMessage);
  }

  function chooseEmodji(emoji: string) {
    setValue((prev) => prev + emoji);
  }

  return (
    <form onSubmit={handleSendMessage}>
      <Input
        style={{ alignItems: 'center' }}
        value={value}
        onChange={handleChangeValue}
        variant="borderless"
        placeholder="Start typing..."
        prefix={<PrefixComponent chooseEmodji={chooseEmodji} />}
        suffix={
          <div className={styles.right}>
            <IconComponent id="at" />
            <button className={styles.send} disabled={!value}>
              <SendOutlined
                style={{ fontSize: '16px', color: `${!value ? '#8E8E93' : '#007AFF'}` }}
              />
            </button>
          </div>
        }
      />
    </form>
  );
};

export default InputMessage;
