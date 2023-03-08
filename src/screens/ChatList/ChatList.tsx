import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, Image, Pressable } from 'react-native';
import { RouteName } from '../../navigation/types/RouteName';
import { StackParamsList } from '../../navigation/types/StackParamsList';
import { styles } from './style';
import { Users } from './users';

export interface Props {
  item?: Users;
}

const ChatList = ({ item }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const chatChoice = () => {
    navigation.navigate(RouteName.Chat);
  };
  return (
    <Pressable style={styles.container} onPress={chatChoice}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item?.user.image,
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.firstname} numberOfLines={1}>
            {item?.user.name}
          </Text>
          <Text style={styles.subTitle}>{item?.lastMessage.time}</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>
          {item?.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatList;
