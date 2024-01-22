import styles from './page.module.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import MessageList from '@/components/messageList/MessageList';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MessageList />
      <Footer />
    </div>
  );
}
