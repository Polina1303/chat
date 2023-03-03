import { Text, SafeAreaView, View, Image } from 'react-native';
import { styles } from './style';
import { Users } from './users';

export interface Props {
  item?: Users;
}

const ChatList = ({ item }: Props) => {
  console.log(item);
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ChatList;
