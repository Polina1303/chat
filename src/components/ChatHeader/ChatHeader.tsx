import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { THEME } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../navigation/types/StackParamsList';

const ChatHeader = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name='arrow-back'
        size={26}
        color={THEME.COLORS.DARKBLUE}
        style={styles.arrow}
      />
      <Text style={styles.title}>Chat</Text>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 5,
  },
  title: {
    color: THEME.COLORS.DARKBLUE,
    fontSize: THEME.FONT_SIZES.FONT_SIZE_24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  arrow: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: 0,
  },
});
