import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextComponent from '../text';
import { RFValue } from '../../utils/responsive';

interface RadioButtonProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  selected: boolean;
}

const RadioButton = ({
  label,
  value,
  onChange,
  selected,
}: RadioButtonProps) => {
  return (
    <View style={styles.container}>
      <TextComponent variant="septenary" fontWeight="normal">
        {label}
      </TextComponent>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={() => onChange(value)}>
          <View style={styles.radioButton}>
            {selected && <View style={styles.radioButtonSelected} />}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: RFValue(20),
    height: RFValue(20),
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: 'black',
  },
  radioButtonSelected: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: RFValue(14),
    height: RFValue(14),
    borderRadius: RFValue(7),
    backgroundColor: 'black',
  },
  radioButtonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: RFValue(20),
    height: RFValue(20),
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: 'black',
  },
});
