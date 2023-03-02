import { useState } from 'react';

import { Text, SafeAreaView, View, Image } from 'react-native';
import { RouteName } from '../../navigation/types/RouteName';
import { StackParamsList } from '../../navigation/types/StackParamsList';
import { styles } from './style';
import { useAuth } from '../../components/useAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Users } from './users';

// type Props = NativeStackScreenProps<StackParamsList, RouteName.ChatList>;

export const ChatList = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.user.image,
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.firstname} numberOfLines={1}>
            {item.user.name}
          </Text>
          <Text style={styles.subTitle}>{item.lastMessage.time}</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>
          {item.lastMessage.text}
        </Text>
      </View>
    </View>
  );
};
