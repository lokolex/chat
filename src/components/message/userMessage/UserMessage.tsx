import { IMessage } from '@/store/types';

import styles from './UserMessage.module.css';

const UserMessage = ({ text, time }: IMessage) => {
  return (
    <div className={`${styles.message} ${styles.user}`}>
      <div className={styles.text}>{text}</div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default UserMessage;
