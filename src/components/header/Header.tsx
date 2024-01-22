'use client';

import { EllipsisOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import styles from './Header.module.css';
import IconComponent from '../iconComponent/IconComponent';

const icons = ['Janet-Product', 'Janet-Engineering', 'Aubrey-Product', 'Jav-Engineering'];

const Header = () => {
  return (
    <header className={styles.header}>
      <Avatar.Group>
        {icons.map((item) => (
          <Avatar key={item} icon={<IconComponent id={item} />} />
        ))}
      </Avatar.Group>

      <div>
        <h3 className={styles.title}>🦄 Team Unicorns</h3>
        <div className={styles.subtitle}>last seen 45 minutes ago</div>
      </div>

      <EllipsisOutlined style={{ color: '#666668', fontSize: '20px', fontWeight: 'bold' }} />
    </header>
  );
};

export default Header;
