import { Image } from 'antd';
import { Spin } from 'antd';
import { IMessage } from '@/store/types';

import styles from './ImgComponent.module.css';

interface ImgUrlProps extends Pick<IMessage, 'imgUrl'> {}

const ImgComponent = ({ imgUrl }: ImgUrlProps) => {
  return (
    <div className={styles.imgBlock}>
      <Image placeholder={<Spin size="large" />} src={imgUrl} width={290} alt="image" />
    </div>
  );
};

export default ImgComponent;
