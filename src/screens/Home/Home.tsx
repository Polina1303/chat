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

// interface Object {
//   User: object;
// }

// interface User<Object> {
//   userName: string;
//   id: number;
// }

export const Home = ({ navigation }: Props) => {
  const [text, onChangeText] = useState('');
  const [error, setError] = useState('');
  // const [person, setPerson] = useState<User>({ userName: '', id: 1 });

  const { isAuth, setIsAuth } = useAuth();

  console.log(isAuth);

  const authHandler = async () => {
    if (text) {
      await AsyncStorage.setItem('id', uuid());
      setIsAuth(true);
      // person[userName] = text;
      // person[id] = uuid;
    } else {
      setError('write the name!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {error && <Text>{error}</Text>} */}
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
      </View>
      <View style={styles.cover}>
        <TouchableOpacity
          style={styles.continueButton}
          // onPress={() => navigation.goBack()}
          onPress={() => authHandler()}
        >
          <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
