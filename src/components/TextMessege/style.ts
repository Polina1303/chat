import { THEME } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  conteiner: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    bottom: 15,
  },

  time: {
    alignSelf: 'flex-end',
    color: THEME.COLORS.GRAY,
  },
});
