import { IMessage } from '@/store/types';
import React from 'react';
import Message from '../message/Message';
import { AnimatePresence } from 'framer-motion';

import styles from './MessageBlock.module.css';

interface MessageBlockProps {
  title: string;
  messages: IMessage[];
}

const MessageBlock = ({ title, messages }: MessageBlockProps) => {
  return (
    <div className={styles['message-block']}>
      <div className={styles.title}>{title}</div>
      <AnimatePresence initial={false}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.wrapper} ${message.name === 'user' ? styles.user : styles.bot}`}
          >
            <Message date={title} {...message} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MessageBlock;
