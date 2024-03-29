import { v4 as uuidv4 } from 'uuid';
import { getCurrentTime } from './getCurrentTime';
import { IMessage } from '@/store/types';

export const createNewMessage = (
  name: string,
  text: string,
  online: boolean,
  imgUrl: string = '',
  position?: string
): IMessage => {
  if (!position) {
    return {
      id: uuidv4(),
      name,
      text,
      time: getCurrentTime(),
      online,
      imgUrl,
    };
  } else {
    return {
      id: uuidv4(),
      name,
      text,
      time: getCurrentTime(),
      online,
      position,
      imgUrl,
    };
  }
};
