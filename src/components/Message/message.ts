export interface Message {
  id: string;
  text: string;
  time: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
}

export const massege: Message[] = [
  {
    id: 'm1',
    text: 'How are you, Lukas! I shoudl be the latest message',
    time: '08:10',
    user: {
      id: 'u1',
      name: 'Polina',
    },
  },
  {
    id: 'm2',
    text: 'I am good, good',
    time: '08:10',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm3',
    text: 'What about you?',
    time: '08:10',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm4',
    text: 'Good as well, preparing for the stream now.',
    time: '08:10',
    user: {
      id: 'u1',
      name: 'Polina',
    },
  },
  {
    id: 'm5',
    text: 'How is your uni going?',
    time: '08:10',
    user: {
      id: 'u1',
      name: 'Polina',
    },
  },
  {
    id: 'm6',
    text: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
    time: '08:10',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm7',
    text: 'Big Data is really interesting. Cannot wait to go through all the material.',
    time: '08:10',
    user: {
      id: 'u1',
      name: 'Polina',
    },
  },
  {
    id: 'm8',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    time: '08:10',
    user: {
      id: 'u1',
      name: 'Polina',
    },
  },
  {
    id: 'm9',
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    time: '08:10',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm10',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
    time: '08:10',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
];
