import { THEME } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BLUE,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleCover: {
    color: THEME.COLORS.WHITE,
    marginBottom: 50,
    alignItems: 'center',
  },
  textTitle: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZES.FONT_SIZE_24,
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderColor: THEME.COLORS.DARKBLUE,
  },
  cover: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  continueButton: {
    alignItems: 'center',
    height: 50,
    backgroundColor: THEME.COLORS.DARKBLUE,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontWeight: '600',
  },
});
