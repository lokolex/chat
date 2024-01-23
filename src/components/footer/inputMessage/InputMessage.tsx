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
import Image from 'next/image';

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
    const newMessage = createNewMessage('user', value, true, '');
    addMessage(currentDate, newMessage);
    setValue('');
    sendBotMessage('Hello World!', addMessage);
  }

  function chooseEmodji(emoji: string) {
    setValue((prev) => prev + emoji);
  }

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgbbKey = process.env.NEXT_PUBLIC_IMGBB_KEY;
    const form = new FormData();
    if (imgbbKey) {
      form.set('key', imgbbKey);
    }
    if (e.target.files?.length) {
      const name = e.target.files[0].name.split('.')[0] + '-' + Date.now();
      form.append('image', e.target.files[0]);
      form.append('name', name);
    }
    fetch('https://api.imgbb.com/1/upload', {
      method: 'post',
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        const imgUrl = data.data.image.url;
        const newMessage = createNewMessage('user', '', true, imgUrl);
        const currentDate = getCurrentDate();
        addMessage(currentDate, newMessage);
      })
      .catch((err) => console.log(err));
  };

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
            <label htmlFor="file">
              <IconComponent id="at" />
            </label>
            <input onChange={uploadImg} id="file" type="file" />

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
