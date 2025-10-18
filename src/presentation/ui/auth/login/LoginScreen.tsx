import { Text, View } from 'react-native';
import Layout from '../../../components/layout';
import styles from './styles';
import useLogin from './useLogin';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Logo from '../../../assets/svg/logo.svg';
import { RFValue } from '../../../utils/responsive';
import { Formik } from 'formik';

const LoginScreen = () => {
  const { handleRegister, formik, t } = useLogin();

  return (
    <Layout>
      <View style={styles.container}>
        <Logo width={RFValue(350)} height={RFValue(200)} />
        <Text style={styles.title}>{t('auth.login.title')}</Text>
        <View style={styles.form}>
          <Formik
            initialValues={formik.initialValues}
            onSubmit={values => console.log(values)}
          >
            {() => (
              <>
                <Input
                  label={t('auth.login.email')}
                  placeholder={t('auth.login.email')}
                  value={formik.values.username}
                  onChangeText={text => formik.setFieldValue('username', text)}
                  error={formik.errors.username}
                />
                <Input
                  label={t('auth.login.password')}
                  placeholder={t('auth.login.password')}
                  secureTextEntry={true}
                  value={formik.values.password}
                  onChangeText={text => formik.setFieldValue('password', text)}
                  error={formik.errors.password}
                />
                <Button
                  text={t('auth.login.login')}
                  variant="primary"
                  disabled={formik.isValidating}
                  onPress={formik.handleSubmit}
                />
                <Button
                  text={t('auth.login.register')}
                  variant="secondary"
                  onPress={handleRegister}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
