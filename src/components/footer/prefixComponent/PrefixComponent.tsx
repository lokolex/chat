import { SmileOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { emojiData } from './emojiData';

import styles from './PrefixComponent.module.css';

interface PrefixComponentProps {
  chooseEmodji: (emoji: string) => void;
}

const PrefixComponent = ({ chooseEmodji }: PrefixComponentProps) => {
  return (
    <Popover
      content={
        <div className={styles['emoji-wrapper']}>
          {emojiData.map((emoji, i) => (
            <div onClick={() => chooseEmodji(emoji)} className={styles.emoji} key={i}>
              {emoji}
            </div>
          ))}
        </div>
      }
      trigger="click"
    >
      <button type="button" className={styles.button}>
        <SmileOutlined style={{ color: '#2C2C2E', fontSize: '16px' }} />
      </button>
    </Popover>
  );
};

export default PrefixComponent;
