import { THEME } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BLUE,
  },
  titleText: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZES.FONT_SIZE_24,
    fontWeight: '600',
  },
});
