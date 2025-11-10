import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { SignInProps } from '../types';
import {
  FormInput,
  LogoContainer,
  Container,
  Button,
  PhoneNumberInput,
  showToast,
  Loader,
  AuthFooter,
} from '../../Components';
import { COLORS, images, SIZES } from '../../constant';
import styles from './style';
import { Formik } from 'formik';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import CheckBox from '@react-native-community/checkbox';
import { signUpValidationSchema } from '../../utils/validations/auth.validations';
import { useAuthDispatch, useAuthState } from '../../redux/Hook/authHooks';

const SignUp: React.FC<SignInProps> = ({ route }) => {
  const width = SIZES.width * 1;
  // const height = SIZES.height * 0.08;

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

  const handleRegister = async (values: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone_number: string;
    device_id?: string;
    token?: string;
  }) => {
    if (!rememberMe) {
      showToast({
        type: 'error',
        text1: 'Terms Required',
        text2: 'You must agree to the terms and conditions',
      });
      return;
    }

    try {
      const userData = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        phone_number: values.phone_number,
        confirm_password: values.confirm_password,
        device_id: '1234',
        token: '1234',
      };
      await register(userData);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  const handleLogin = () => {
    navigate({ name: NavigationStrings.SIGN_IN as keyof RootStackParamList });
  };

  return (

    <Container
      scroll={true}
      style={styles.container}
      needsKeyboardAvoiding={true}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: COLORS.white,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <LogoContainer />
            <Text style={styles.text}>Register Yourself</Text>
            <View>
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
                  isValid,
                  dirty,
                }) => (
                  <View>
                    <View style={styles.inputContainer}>
                      <View style={styles.rowContainer}>
                        <View>
                          <FormInput
                            label="First name"
                            placeholder=""
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                            width={SIZES.width * 0.5}
                            height={SIZES.input * 1.5} error={touched.first_name && errors.first_name}
                          />
                        </View>
                        <View>
                          <FormInput
                            label="Last name"
                            placeholder=""
                            value={values.last_name}
                            onBlur={handleBlur('last_name')}
                            onChangeText={handleChange('last_name')}
                            width={SIZES.width * 0.5}
                            height={SIZES.input * 1.5} error={touched.last_name && errors.last_name}
                          />
                        </View>
                      </View>
                      <FormInput
                        label="Email Address"
                        placeholder=""
                        onBlur={handleBlur('email')}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        width={width}
                        height={SIZES.input * 1.5} error={touched.email && errors.email}
                      />
                      <PhoneNumberInput
                        label="Phone Number"
                        value={values.phone_number}
                        onChange={phone =>
                          setFieldValue('phone_number', phone)
                        } // ✅ pass as onChange
                        error={
                          touched.phone_number && errors.phone_number
                            ? errors.phone_number
                            : ''
                        }
                      />

                      {touched.phone_number && errors.phone_number && (
                        <Text style={styles.errorText}>
                          {errors.phone_number}
                        </Text>
                      )}
                      <FormInput
                        label="Password"
                        placeholder=""
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={touched.password && errors.password}
                        isPassword
                        width={width}
                        height={SIZES.input * 1.5} />

                      <FormInput
                        label="Confirm Password"
                        placeholder=""
                        value={values.confirm_password}
                        onChangeText={handleChange('confirm_password')}
                        onBlur={handleBlur('confirm_password')}
                        isPassword={true}
                        width={width}
                        height={SIZES.input * 1.5} error={
                          touched.confirm_password && errors.confirm_password
                        }
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
            </View>
          </View>
          <AuthFooter
            message="Already have an account?"
            linkText="Login Now"
            targetScreen={NavigationStrings.SIGN_IN}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      {loading && <Loader />}
    </Container>

  );
};

export default SignUp;
