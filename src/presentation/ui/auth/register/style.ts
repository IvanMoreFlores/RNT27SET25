import { StyleSheet } from 'react-native';
import { RFValue } from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    width: '100%',
    gap: RFValue(10),
    padding: RFValue(24),
  },
  title: {
    fontSize: RFValue(32),
    fontFamily: 'FormulaCondensed-Bold',
    letterSpacing: RFValue(1),
  },
});

export default styles;
