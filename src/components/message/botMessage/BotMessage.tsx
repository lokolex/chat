import { IMessage } from '@/store/types';
import { Avatar } from 'antd';

import styles from './BotMessage.module.css';
import IconComponent from '@/components/iconComponent/IconComponent';

const BotMessage = ({ position, name, text, time }: IMessage) => {
  return (
    <div className={styles.wrapper}>
      <div style={{ width: '32px' }}>
        <Avatar size="default" icon={<IconComponent id={`${name}-${position}`} />} />
      </div>
      <div className={`${styles['message-bot']} ${styles.bot}`}>
        <div className={styles['bot-title']}>
          {name} <span>{position}</span>
        </div>
        <div className={styles['bot-text']}>{text}</div>
        <div className={styles['bot-time']}>{time}</div>
      </div>
    </div>
  );
};

export default BotMessage;