import { View, Text, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import { users } from '../ChatList/users';
import { ChatList } from '../ChatList/ChatList';
import { styles } from './style';

const Chats = () => {
  return (
    <>
      <SafeAreaView style={styles.title}>
        <Text style={styles.titleText}>Chat</Text>
      </SafeAreaView>

      <FlatList
        data={users}
        renderItem={({ item }) => <ChatList item={item} />}
      />
    </>
  );
};

export default Chats;
