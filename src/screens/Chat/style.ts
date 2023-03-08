import { THEME } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BLUE,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  list: {
    padding: 10,
  },
});
