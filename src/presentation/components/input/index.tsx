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
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    gap: RFValue(10),
  },
  label: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  input: {
    borderWidth: RFValue(1),
    borderColor: 'gray',
    padding: RFValue(10),
    borderRadius: RFValue(5),
  },
});
