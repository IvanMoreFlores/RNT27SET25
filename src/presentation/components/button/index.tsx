import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

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
      style={[styles.button, styles[variant], styles[size]]}
    >
      {props.children}
      <Text style={[styles.text, styles[`text_${variant}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  small: {
    padding: 10,
    borderRadius: 5,
  },
  medium: {
    padding: 10,
    borderRadius: 5,
  },
  large: {
    padding: 10,
    borderRadius: 5,
  },
  primary: {
    backgroundColor: 'blue',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'blue',
  },
  text_primary: {
    color: 'white',
  },
  text_secondary: {
    color: 'blue',
  },
});
