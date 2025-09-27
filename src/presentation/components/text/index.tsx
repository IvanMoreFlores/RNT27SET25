import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

interface TextComponentProps extends TextProps {
  children: React.ReactNode;
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

const TextComponent = ({ children, style, ...props }: TextComponentProps) => {
  return (
    <Text style={style} {...props}>
      {children}
    </Text>
  );
};

export default TextComponent;
