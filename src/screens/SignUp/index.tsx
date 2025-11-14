import React, { useEffect } from 'react';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import { SignInProps } from '../types';
import {
  FormInput,
  LogoContainer,
  Button,
  PhoneNumberInput,
  showToast,
  Loader,
  AuthFooter,
} from '../../Components';
import { COLORS, SIZES } from '../../constant';
import styles from './style';
import { Formik } from 'formik';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { signUpValidationSchema } from '../../utils/validations/auth.validations';
import { useAuthDispatch, useAuthState } from '../../redux/Hook/authHooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp: React.FC<SignInProps> = ({ route }) => {
  const width = SIZES.width;
  const [rememberMe, setRememberMe] = React.useState(false);
  const { register } = useAuthDispatch();
  const { loading, error, isAuthenticated } = useAuthState();

  useEffect(() => {
    if (isAuthenticated && !loading && !error) {
      showToast({
        type: 'success',
        text1: 'Registration Successful',
        text2: 'Your account has been created successfully!',
      });
    } else if (error) {
      showToast({
        type: 'error',
        text1: 'Registration Failed',
        text2: error || 'Something went wrong. Please try again.',
      });
    }
  }, [isAuthenticated, loading, error]);

  const handleRegister = async (values: any) => {
    if (!rememberMe) {
      showToast({
        type: 'error',
        text1: 'Terms Required',
        text2: 'You must agree to the terms and conditions',
      });
      return;
    }

    try {
      await register({
        ...values,
        device_id: '1234',
        token: '1234',
      });
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: COLORS.white }}
      contentContainerStyle={{ paddingBottom: 0 }}
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'ios' ? 80 : 150}
      keyboardShouldPersistTaps="handled"
    >
      <LogoContainer />
      <Text style={styles.text}>Register Yourself</Text>

      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: '',
          phone_number: '',
          is_verified: false,
          is_active: true,
          points: 0,
        }}
        onSubmit={handleRegister}
        validationSchema={signUpValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.inputContainer}>
              <View style={styles.rowContainer}>
                <FormInput
                  label="First name"
                  placeholder=''
                  value={values.first_name}
                  onChangeText={handleChange('first_name')}
                  onBlur={handleBlur('first_name')}
                  width={width * 0.5}
                  height={SIZES.input * 1.5}
                  error={touched.first_name && errors.first_name}
                />
                <FormInput
                  label="Last name"
                  placeholder=''
                  value={values.last_name}
                  onChangeText={handleChange('last_name')}
                  onBlur={handleBlur('last_name')}
                  width={width * 0.5}
                  height={SIZES.input * 1.5}
                  error={touched.last_name && errors.last_name}
                />
              </View>

              <FormInput
                label="Email Address"
                placeholder=''
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                width={width}
                height={SIZES.input * 1.5}
                error={touched.email && errors.email}
              />

              <PhoneNumberInput
                label="Phone Number"
                value={values.phone_number}
                onChange={(phone) => setFieldValue('phone_number', phone)}
                error={touched.phone_number && errors.phone_number ? errors.phone_number : ''}
              />

              <FormInput
                label="Password"
                placeholder=''
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                isPassword
                width={width}
                height={SIZES.input * 1.5}
                error={touched.password && errors.password}
              />

              <FormInput
                label="Confirm Password"
                placeholder=''
                value={values.confirm_password}
                onChangeText={handleChange('confirm_password')}
                onBlur={handleBlur('confirm_password')}
                isPassword
                width={width}
                height={SIZES.input * 1.5}
                error={touched.confirm_password && errors.confirm_password}
              />
            </View>

            <Button
              onPress={() => handleSubmit()}
              title="Register"
              colors={[COLORS.ThemeColor, COLORS.ThemeColor]}
            />
          </View>
        )}
      </Formik>

      <AuthFooter
        message="Already have an account?"
        linkText="Login Now"
        targetScreen={NavigationStrings.SIGN_IN}
      />

      {loading && <Loader />}
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
