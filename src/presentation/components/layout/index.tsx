import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
          style={styles.container}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
