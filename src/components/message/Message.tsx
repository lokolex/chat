import { IMessage } from '@/store/types';
import UserMessage from './userMessage/UserMessage';
import BotMessage from './botMessage/BotMessage';

const Message = (props: IMessage) => {
  const { name } = props;

  return <>{name === 'user' ? <UserMessage {...props} /> : <BotMessage {...props} />}</>;
};

export default Message;
