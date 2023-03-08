import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { massege } from '../../components/TextMessege/message';
import TextMessege from '../../components/TextMessege/TextMessege ';
import { styles } from './style';
import InputBox from '../../components/InputBox/InputBox';
import ChatHeader from '../../components/ChatHeader/ChatHeader';

const Chat = () => {
  return (
    <>
      <ChatHeader />
      <View style={styles.container}>
        <FlatList
          data={massege}
          style={styles.list}
          renderItem={({ item }) => <TextMessege item={item} />}
        />
      </View>
      <InputBox />
    </>
  );
};

export default Chat;
