import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { RFValue } from '../../utils/responsive';
import { ThemeContext } from '../../app/provider/theme';
import { useContext } from 'react';

interface TextComponentProps extends TextProps {
  children: React.ReactNode;
  fontWeight?:
    | 'bold'
    | 'normal'
    | 'light'
    | 'medium'
    | 'semibold'
    | 'thin'
    | 'hairline';
  style?: StyleProp<TextStyle>;
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'quinary'
    | 'senary'
    | 'septenary'
    | 'octonary'
    | 'nonary'
    | 'denary';
}

const TextComponent = ({
  children,
  style,
  variant = 'primary',
  fontWeight = 'normal',
  ...props
}: TextComponentProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text
      style={[
        styles[variant],
        style,
        { fontWeight: fontWeight as TextStyle['fontWeight'] },
        { color: theme.colors.text.primary },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  primary: {
    fontSize: RFValue(32),
  },
  secondary: {
    fontSize: RFValue(30),
    fontWeight: 'normal',
  },
  tertiary: {
    fontSize: RFValue(28),
    fontWeight: 'normal',
  },
  quaternary: {
    fontSize: RFValue(26),
    fontWeight: 'normal',
  },
  quinary: {
    fontSize: RFValue(24),
    fontWeight: 'normal',
  },
  senary: {
    fontSize: RFValue(20),
    fontWeight: 'normal',
  },
  septenary: {
    fontSize: RFValue(18),
    fontWeight: 'normal',
  },
  octonary: {
    fontSize: RFValue(16),
    fontWeight: 'normal',
  },
  nonary: {
    fontSize: RFValue(14),
    fontWeight: 'normal',
  },
  denary: {
    fontSize: RFValue(12),
    fontWeight: 'normal',
  },
});
