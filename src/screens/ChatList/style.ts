import { THEME } from '../../constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: THEME.COLORS.SILVER,
  },
  row: {
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  firstname: {
    flex: 1,
  },
  subTitle: {
    color: THEME.COLORS.GRAY,
  },
});
