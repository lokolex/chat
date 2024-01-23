'use client';

import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import PrefixComponent from '../prefixComponent/PrefixComponent';
import useMessages from '@/store/useMessages';

import styles from './InputEdit.module.css';

const InputEdit = () => {
  const [value, setValue] = useState('');
  const { closeEditMessage, editData, editMessage } = useMessages();

  useEffect(() => {
    setValue(editData.editText);
  }, [editData]);

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value.trimStart());
  }

  function handleSendEditedMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) return;

    editMessage(editData.editDate, value, editData.messageId);

    setValue('');
  }

  function chooseEmodji(emoji: string) {
    setValue((prev) => prev + emoji);
  }

  function handleCloseEditing() {
    closeEditMessage();
  }

  return (
    <form onSubmit={handleSendEditedMessage}>
      <Input
        style={{ alignItems: 'center' }}
        value={value}
        onChange={handleChangeValue}
        variant="borderless"
        placeholder="Start typing..."
        prefix={<PrefixComponent chooseEmodji={chooseEmodji} />}
        suffix={
          <div className={styles.right}>
            <button className={styles.send} disabled={!value}>
              <CheckOutlined
                style={{ fontSize: '16px', color: `${!value ? '#8E8E93' : 'green'}` }}
              />
            </button>
            <CloseOutlined
              onClick={handleCloseEditing}
              style={{ fontSize: '16px', color: 'red', cursor: 'pointer' }}
            />
          </div>
        }
      />
    </form>
  );
};

export default InputEdit;
