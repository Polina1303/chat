import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';

import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { RouteName } from '../../navigation/types/RouteName';
import { StackParamsList } from '../../navigation/types/StackParamsList';
import { styles } from './style';
import { useAuth } from '../../components/useAuth';

type Props = NativeStackScreenProps<StackParamsList, RouteName.Home>;

export const Home = ({ navigation }: Props) => {
  const [text, onChangeText] = useState('');
  const [error, setError] = useState('');

  const authHandler = async () => {
    if (text && text !== '') {
      const userDate = {
        id: uuid(),
        userName: text,
      };
      const usersToAS = [];
      const usersFromAS = (await AsyncStorage.getItem('users')) as string;
      const usersDataArray = JSON.parse(usersFromAS);

      if (usersDataArray) {
        usersDataArray.push(userDate);
        await AsyncStorage.setItem('users', JSON.stringify(usersDataArray));
      } else {
        usersToAS.push(userDate);
        await AsyncStorage.setItem('users', JSON.stringify(usersToAS));
      }
      navigation.navigate(RouteName.Chats);
    } else {
      setError('write the name!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleCover}>
        <Text style={styles.textTitle}>Welcome </Text>
      </View>
      <View style={styles.cover}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='name'
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <View style={styles.cover}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => authHandler()}
        >
          <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
