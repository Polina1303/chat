import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { THEME } from '../../constants/theme';

const InputBox = () => {
  const [text, setText] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <AntDesign name='plus' size={25} color={THEME.COLORS.SILVER} />
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder='Type your message...'
        />
        <MaterialIcons name='send' size={25} color={THEME.COLORS.SILVER} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.WHITE_GRAY,
    paddingHorizontal: 10,
  },
  input: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    borderColor: THEME.COLORS.WHITE_GRAY,
    backgroundColor: THEME.COLORS.WHITE,
    paddingTop: 7,
    paddingBottom: 7,
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default InputBox;
