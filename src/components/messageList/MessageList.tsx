'use client';

import useMessages from '@/store/useMessages';
import MessageBlock from '../messageBlock/MessageBlock';
import { useEffect, useRef } from 'react';
import { DownCircleTwoTone } from '@ant-design/icons';

import styles from './MessageList.module.css';

const MessageList = () => {
  const { data } = useMessages();
  const dates = Object.keys(data);

  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    blockRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [data, dates]);

  return (
    <div className={styles.main}>
      <DownCircleTwoTone
        onClick={() => blockRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })}
        twoToneColor={'#81e299'}
        style={{
          display: 'block',
          fontSize: '30px',
          position: 'sticky',
          top: '75%',
          marginRight: '-80%',
          zIndex: 50,
        }}
      />
      {dates.map((date) => {
        return <MessageBlock key={date} title={date} messages={data[date].messages} />;
      })}
      <div ref={blockRef}></div>
    </div>
  );
};

export default MessageList;
