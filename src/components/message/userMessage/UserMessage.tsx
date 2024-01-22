import { Popover } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { MessageProps } from '../Message';

import styles from './UserMessage.module.css';
import useMessages from '@/store/useMessages';

const UserMessage = ({ text, time, date, id }: MessageProps) => {
  const { deleteMessage } = useMessages();

  return (
    <Popover
      content={
        <div className={styles.tools}>
          <EditTwoTone
            twoToneColor="green"
            color="green"
            style={{ fontSize: '18px', cursor: 'pointer' }}
          />
          <DeleteTwoTone
            onClick={() => deleteMessage(date, id)}
            twoToneColor="red"
            style={{ fontSize: '18px', cursor: 'pointer' }}
          />
        </div>
      }
      trigger="click"
    >
      <div className={`${styles.message} ${styles.user}`}>
        <div className={styles.text}>{text}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </Popover>
  );
};

export default UserMessage;
