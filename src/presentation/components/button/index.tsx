import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { RFValue } from '../../utils/responsive';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  const { text, ...rest } = props;
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.button,
        styles[variant],
        styles[size],
        props.disabled && styles.disabled,
      ]}
      disabled={props.disabled}
    >
      {props.children}
      <Text style={[styles.text, styles[`text_${variant}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: RFValue(10),
    borderRadius: RFValue(5),
  },
  text: {
    fontSize: RFValue(24),
    fontFamily: 'FormulaCondensed-Bold',
    letterSpacing: RFValue(1),
    textAlign: 'center',
  },
  small: {
    padding: RFValue(10),
    borderRadius: RFValue(5),
  },
  medium: {
    padding: RFValue(10),
    borderRadius: RFValue(5),
  },
  large: {
    padding: RFValue(10),
    borderRadius: RFValue(5),
  },
  primary: {
    backgroundColor: '#262626',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: RFValue(1),
    borderColor: '#262626',
  },
  text_primary: {
    color: 'white',
  },
  text_secondary: {
    color: '#262626',
  },
  disabled: {
    opacity: 0.5,
  },
});
