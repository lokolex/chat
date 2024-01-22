import { IMessage } from '@/store/types';
import UserMessage from './userMessage/UserMessage';
import BotMessage from './botMessage/BotMessage';

export interface MessageProps extends IMessage {
  date: string;
}

const Message = (props: MessageProps) => {
  const { name } = props;

  return <>{name === 'user' ? <UserMessage {...props} /> : <BotMessage {...props} />}</>;
};

export default Message;
