import { StyleSheet } from 'react-native';
import { RFValue } from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    width: '100%',
    gap: 10,
    padding: 24,
  },
  title: {
    fontSize: RFValue(32),
    fontFamily: 'FormulaCondensed-Bold',
    letterSpacing: RFValue(1),
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default styles;
