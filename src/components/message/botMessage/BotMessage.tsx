import { motion } from 'framer-motion';
import { IMessage } from '@/store/types';
import { Avatar } from 'antd';
import IconComponent from '@/components/iconComponent/IconComponent';

import styles from './BotMessage.module.css';

const BotMessage = ({ position, name, text, time, online }: IMessage) => {
  return (
    <motion.div
      initial={{ x: '-200%' }}
      animate={{ x: '0' }}
      exit={{ x: '-200%' }}
      className={styles.wrapper}
    >
      <div className={`${styles.avatar} ${online ? styles.online : null}`}>
        <Avatar size="default" icon={<IconComponent id={`${name}-${position}`} />} />
      </div>
      <div className={`${styles['message-bot']} ${styles.bot}`}>
        <div className={styles['bot-title']}>
          {name} <span>{position}</span>
        </div>
        <div className={styles['bot-text']}>{text}</div>
        <div className={styles['bot-time']}>{time}</div>
      </div>
    </motion.div>
  );
};

export default BotMessage;
