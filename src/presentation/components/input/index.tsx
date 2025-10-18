import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { RFValue } from '../../utils/responsive';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={styles.input} />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    gap: RFValue(10),
  },
  label: {
    fontSize: RFValue(32),
    fontFamily: 'FormulaCondensed-Bold',
    letterSpacing: RFValue(1),
    color: '#262626',
  },
  input: {
    borderWidth: RFValue(1),
    borderColor: 'gray',
    padding: RFValue(10),
    borderRadius: RFValue(5),
    fontSize: RFValue(18),
    fontFamily: 'NeueMontrealMedium',
    letterSpacing: RFValue(1),
    color: '#262626',
  },
  error: {
    fontSize: RFValue(12),
    fontFamily: 'NeueMontrealMedium',
    letterSpacing: RFValue(1),
    color: 'red',
  },
});
