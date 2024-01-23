'use client';

import useMessages from '@/store/useMessages';
import InputMessage from './inputMessage/InputMessage';
import InputEdit from './inputEdit/InputEdit';

import styles from './Footer.module.css';

const Footer = () => {
  const {
    editData: { isEdit },
  } = useMessages();

  return <footer className={styles.footer}>{isEdit ? <InputEdit /> : <InputMessage />}</footer>;
};

export default Footer;
