'use client';

import useMessages from '@/store/useMessages';
import MessageBlock from '../messageBlock/MessageBlock';
import { useEffect, useRef } from 'react';
import { DownCircleTwoTone } from '@ant-design/icons';
import { useInView } from 'react-intersection-observer';

import styles from './MessageList.module.css';

const MessageList = () => {
  const { data, getAllMessages } = useMessages();
  const dates = Object.keys(data);
  const allMsg = getAllMessages();

  const blockRef = useRef<HTMLDivElement | null>(null);

  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: '500px 0px 0px 0px',
  });

  useEffect(() => {
    blockRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [data, dates]);

  const downBtn =
    allMsg.length < 9 || inView ? null : (
      <DownCircleTwoTone
        onClick={() => blockRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })}
        twoToneColor={'#81e299'}
        style={{
          fontSize: '30px',
          position: 'sticky',
          top: '75%',
          zIndex: 50,
        }}
      />
    );

  return (
    <div className={styles.main}>
      {downBtn}

      {dates.map((date) => {
        return <MessageBlock key={date} title={date} messages={data[date].messages} />;
      })}
      <div ref={blockRef}></div>
      <div ref={ref} className={styles.mark}></div>
    </div>
  );
};

export default MessageList;
