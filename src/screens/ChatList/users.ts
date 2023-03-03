export interface Users {
  id: string;
  user: User;
  lastMessage: Message;
}

export interface User {
  id: string;
  image: string;
  name: string;
}

export interface Message {
  id: string;
  text: string;
  time: string;
}

export const users: Users[] = [
  {
    id: '1',
    user: {
      id: 'u2',
      image:
        'https://cojo.ru/wp-content/uploads/2022/12/avatarki-dlia-vatsapa-35.webp',
      name: 'Leonardo',
    },
    lastMessage: {
      id: 'm1',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '2',
    user: {
      id: 'u3',
      image:
        'https://w-hatsapp.ru/wp-content/uploads/2017/05/screenshot-2017-05-19-001-3.png',
      name: 'Alexander',
    },
    lastMessage: {
      id: 'm2',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '3',
    user: {
      id: 'u4',
      image: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/10-2.png',
      name: 'William ',
    },
    lastMessage: {
      id: 'm3',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '4',
    user: {
      id: 'u5',
      image: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/4-4.png',
      name: 'Mason',
    },
    lastMessage: {
      id: 'm4',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '5',
    user: {
      id: 'u6',
      image: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/7-4.png',
      name: 'Anna',
    },
    lastMessage: {
      id: 'm5',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '6',
    user: {
      id: 'u7',
      image: 'https://klike.net/uploads/posts/2022-06/1654495187_3.jpg',
      name: 'Mary',
    },
    lastMessage: {
      id: 'm6',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '7',
    user: {
      id: 'u8',
      image: 'https://klike.net/uploads/posts/2022-06/1654495165_4.jpg',
      name: 'Victoria',
    },
    lastMessage: {
      id: 'm7',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '8',
    user: {
      id: 'u9',
      image: 'https://klike.net/uploads/posts/2022-06/1654495130_7.jpg',
      name: 'Eva',
    },
    lastMessage: {
      id: 'm8',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '9',
    user: {
      id: 'u10',
      image:
        'https://cojo.ru/wp-content/uploads/2022/12/multiashnye-devochki-18.webp',
      name: 'Diana',
    },
    lastMessage: {
      id: 'm9',
      text: 'Hello',
      time: '08:30',
    },
  },
  {
    id: '10',
    user: {
      id: 'u11',
      image:
        'https://cojo.ru/wp-content/uploads/2022/12/multiashnaia-devochka-v-ochkakh-12.webp',
      name: 'Dana',
    },
    lastMessage: {
      id: 'm10',
      text: 'Hello',
      time: '08:30',
    },
  },
];
