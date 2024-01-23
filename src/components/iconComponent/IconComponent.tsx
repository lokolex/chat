import Image from 'next/image';
import { UserOutlined } from '@ant-design/icons';

import FirstIcon from './img/first.svg';
import SecondIcon from './img/second.svg';
import ThirdIcon from './img/third.svg';
import BotIcon from './img/bot.svg';
import AtIcon from './img/at-svg.svg';

interface IconComponentProps {
  id: string;
}

const IconComponent = ({ id }: IconComponentProps) => {
  switch (id) {
    case 'Janet-Product':
      return <Image src={FirstIcon} alt="Janet-Product" />;
    case 'Janet-Engineering':
      return <Image src={SecondIcon} alt="Janet-Engineering" />;
    case 'Aubrey-Product':
      return <Image src={ThirdIcon} alt="Aubrey-Product" />;
    case 'Jav-Engineering':
      return <Image src={BotIcon} alt="Jav-Engineering" />;
    case 'at':
      return <Image src={AtIcon} alt="at" width={16} height={16} style={{ cursor: 'pointer' }} />;
    default:
      return <UserOutlined />;
  }
};

export default IconComponent;
