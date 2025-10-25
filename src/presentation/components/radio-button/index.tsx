import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextComponent from '../text';
import { RFValue } from '../../utils/responsive';
import { ThemeContext } from '../../app/provider/theme';
import { useContext, useMemo } from 'react';
import { ThemeType } from '../../app/theme';

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
  const { theme } = useContext(ThemeContext);
  const styles = useMemo(() => createStyles(theme), [theme]);
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

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
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
      borderColor: theme.colors.checkBox.secondary,
    },
    radioButtonSelected: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: RFValue(14),
      height: RFValue(14),
      borderRadius: RFValue(7),
      backgroundColor: theme.colors.checkBox.primary,
    },
    radioButtonContainer: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: RFValue(20),
      height: RFValue(20),
      borderRadius: RFValue(10),
      borderWidth: 1,
      borderColor: theme.colors.checkBox.primary,
    },
  });
