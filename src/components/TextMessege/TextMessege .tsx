import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './style';
import { THEME } from '../../constants/theme';
import { Message } from './message';

interface Props {
  item: Message;
}

const TextMessege = ({ item }: Props) => {
  const isMyMessege = () => {
    return item.user.id === 'u1';
  };
  return (
    <View
      style={[
        styles.conteiner,
        {
          backgroundColor: isMyMessege()
            ? THEME.COLORS.SILVER
            : THEME.COLORS.WHITE,
          alignSelf: isMyMessege() ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text>{item.text}</Text>

      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
};

export default TextMessege;
