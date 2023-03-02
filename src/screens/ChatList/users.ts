export interface Users {
  id: string;
  user: User;
  lastMessage: Message;
}

export interface User {
  image: string;
  name: string;
}

export interface Message {
  text: string;
  time: string;
}

export const users: Users[] = [
  {
    id: '1',
    user: {
      image:
        'https://cojo.ru/wp-content/uploads/2022/12/avatarki-dlia-vatsapa-35.webp',
      name: 'Leonardo',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '2',
    user: {
      image:
        'https://w-hatsapp.ru/wp-content/uploads/2017/05/screenshot-2017-05-19-001-3.png',
      name: 'Alexander',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '3',
    user: {
      image: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/10-2.png',
      name: 'William ',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '4',
    user: {
      image: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/4-4.png',
      name: 'Mason',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '5',
    user: {
      image: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/7-4.png',
      name: 'Anna',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '6',
    user: {
      image: 'https://klike.net/uploads/posts/2022-06/1654495187_3.jpg',
      name: 'Mary',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '7',
    user: {
      image: 'https://klike.net/uploads/posts/2022-06/1654495165_4.jpg',
      name: 'Victoria',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '8',
    user: {
      image: 'https://klike.net/uploads/posts/2022-06/1654495130_7.jpg',
      name: 'Eva',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '9',
    user: {
      image:
        'https://cojo.ru/wp-content/uploads/2022/12/multiashnye-devochki-18.webp',
      name: 'Diana',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '10',
    user: {
      image:
        'https://cojo.ru/wp-content/uploads/2022/12/multiashnaia-devochka-v-ochkakh-12.webp',
      name: 'Dana',
    },
    lastMessage: {
      text: 'Hello',
      time: '08:30',
    },
  },
];
