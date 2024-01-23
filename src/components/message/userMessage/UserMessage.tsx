'use client';

import { Popover } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { MessageProps } from '../Message';
import useMessages from '@/store/useMessages';
import { useState } from 'react';

import styles from './UserMessage.module.css';

const UserMessage = ({ text, time, date, id }: MessageProps) => {
  const { deleteMessage, onEditMessage } = useMessages();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  function handleDelete() {
    hide();
    deleteMessage(date, id);
  }

  function handleEdit() {
    hide();
    onEditMessage(date, text, id);
  }

  return (
    <Popover
      content={
        <div className={styles.tools}>
          <EditTwoTone
            onClick={handleEdit}
            twoToneColor="green"
            color="green"
            style={{ fontSize: '18px', cursor: 'pointer' }}
          />
          <DeleteTwoTone
            onClick={handleDelete}
            twoToneColor="red"
            style={{ fontSize: '18px', cursor: 'pointer' }}
          />
        </div>
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className={`${styles.message} ${styles.user}`}>
        <div className={styles.text}>{text}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </Popover>
  );
};

export default UserMessage;
