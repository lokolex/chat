'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from 'antd';
import { IMessage } from '@/store/types';
import { getCurrentTime } from '@/utils/getCurrentTime';
import { getCurrentDate } from '@/utils/getCurrentDate';
import useMessages from '@/store/useMessages';
import PrefixComponent from './prefixComponent/PrefixComponent';

import styles from './Footer.module.css';
import IconComponent from '../iconComponent/IconComponent';
import { SendOutlined } from '@ant-design/icons';

const Footer = () => {
  const [value, setValue] = useState('');
  const addMessage = useMessages((state) => state.addMessage);

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value.trimStart());
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) return;
    const currentDate = getCurrentDate();
    const newMessage: IMessage = {
      id: uuidv4(),
      name: 'user',
      text: value,
      time: getCurrentTime(),
    };
    addMessage(currentDate, newMessage);
    setValue('');
  }

  function chooseEmodji(emoji: string) {
    setValue((prev) => prev + emoji);
  }

  return (
    <footer className={styles.footer}>
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
    </footer>
  );
};

export default Footer;
