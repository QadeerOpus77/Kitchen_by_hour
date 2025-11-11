import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Container,
  LogoContainer,
  FormInput,
  Button,
  Loader,
  showToast,
  AuthFooter,
} from '../../Components';
import styles from './style';
import { COLORS, FONTS, images, SIZES } from '../../constant';
import { SocialPlatform } from '../types';
import { Formik } from 'formik';
import CheckBox from '@react-native-community/checkbox';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { useAuthState, useAuthDispatch } from '../../redux/Hook/authHooks';
import { loginValidationSchema } from '../../utils/validations/auth.validations';
import localStoreUtil from '../../utils/localStoreUtil';
import { useRoleState } from '../../redux/Hook/useRole';
import { RoleType } from '../../redux/Enums/RoleEnum';

const SignIn = () => {
  const [activeButton, setActiveButton] = useState<SocialPlatform | null>(null);
  const socials: SocialPlatform[] = ['apple', 'google'];
  const [rememberMe, setRememberMe] = useState(false);
  const { login, clearAuthError } = useAuthDispatch();
  const { loading, error, isAuthenticated } = useAuthState();
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
    device_id: '1234',
    token: '1234',
  });
  const [formKey, setFormKey] = useState(0);
  const { selectedRole } = useRoleState();


  useEffect(() => {
    const initializeDeviceData = async () => {
      try {
        const token = 'default_token';
        const savedCredentials = await localStoreUtil.getData<{
          email: string;
          password: string;
          rememberMe: boolean;
        }>('userCredentials');

        setInitialValues({
          email: savedCredentials?.email || '',
          password: savedCredentials?.password || '',
          device_id: '1234',
          token: token,
        });

        setRememberMe(savedCredentials?.rememberMe || false);
        setFormKey(prev => prev + 1);
      } catch (err) {
        console.error('Error initializing device data:', err);
      }
    };

    initializeDeviceData();
  }, []);

  const handleRememberMeToggle = async (newValue: boolean) => {
    setRememberMe(newValue);

    if (!newValue) {
      await localStoreUtil.removeData('userCredentials');
    } else if (initialValues.email && initialValues.password) {
      await localStoreUtil.storeData('userCredentials', {
        email: initialValues.email,
        password: initialValues.password,
        rememberMe: newValue,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated && !loading && !error) {
      showToast({
        type: 'success',
        text1: 'Login Successful',
        text2: 'You have successfully logged in!',
      });
      // navigate to BottomStack after login
      navigate({
        name: NavigationStrings.BOTTOM_STACK as keyof RootStackParamList,
      });
    } else if (error) {
      showToast({
        type: 'error',
        text1: 'Login Failed',
        text2: error || 'Invalid credentials',
      });
    }
  }, [isAuthenticated, loading, error]);

  const width = SIZES.width * 1;

  return (
    <Container style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <LogoContainer />
          <Text style={styles.text}>It’s Go time, Chef!</Text>

          <Formik
            key={formKey}
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={async values => {
              clearAuthError();
              if (rememberMe) {
                await localStoreUtil.storeData('userCredentials', {
                  email: values.email,
                  password: values.password,
                  rememberMe: true,
                });
              } else {
                await localStoreUtil.removeData('userCredentials');
              }
              await login(values);
            }}
            enableReinitialize
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.inputContainer}>
                <FormInput
                  label="Email Address"
                  placeholder=""
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email}
                  width={width}
                  height={SIZES.input * 1.5}
                // height={SIZES.padding * 3}
                />
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

                <View style={styles.rememberMeContainer}>
                  {/* <View style={styles.rememberMeCheckBoxContainer}>
                      <CheckBox
                        value={rememberMe}
                        onValueChange={handleRememberMeToggle}
                        tintColors={{ true: COLORS.ThemeColor, false: '#ccc' }}
                        boxType={Platform.OS === 'ios' ? 'circle' : undefined}
                        style={{ width: SIZES.large, height: SIZES.large }}
                      />
                      <Text style={styles.rememberMeText}>Remember Me</Text>
                    </View> */}
                  <TouchableOpacity
                    onPress={() =>
                      navigate({
                        name: NavigationStrings.FORGOT_PASSWORD as keyof RootStackParamList,
                      })
                    }
                  >
                    <Text style={styles.forgotPasswordText}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>

                <Button
                  // onPress={handleSubmit}

                  title="Login"
                  colors={[COLORS.ThemeColor, COLORS.ThemeColor]}
                  onPress={() => {
                    if (selectedRole === RoleType.ADMINISTRATOR) {
                      navigate({
                        name: NavigationStrings.BOTTOM_STACK as keyof RootStackParamList,
                        params: {
                          screen: NavigationStrings.HOME_STACK, params: { screen: NavigationStrings.BOOK_KITCHEN },
                        }
                      }
                      );
                    } else {
                      navigate({
                        name: NavigationStrings.BOTTOM_STACK as keyof RootStackParamList,
                      }
                      );
                    }
                  }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: SIZES.margin }} >
                  <View style={{ marginHorizontal: SIZES.margin, flex: 1, height: 1, backgroundColor: '#000000ff', }} />
                  <Text style={styles.continueWith}>or continue with</Text>
                  <View style={{ marginHorizontal: SIZES.margin, flex: 1, height: 1, backgroundColor: '#000000ff', }} />
                </View>

                <View style={styles.socialContainer}>
                  {socials.map(platform => {
                    const isApple = platform === 'apple';
                    const isGoogle = platform === 'google';
                    return (
                      <TouchableOpacity
                        key={platform}
                        style={[
                          styles.socialButton,
                          isGoogle && { backgroundColor: '#F5F5F5' },
                          isApple && { backgroundColor: '#000' },
                        ]}
                      >
                        <View style={styles.socialContent}>
                          <Image
                            source={
                              isGoogle
                                ? images.google
                                : isApple
                                  ? images.apple
                                  : null
                            }
                            style={styles.socialIcon}
                            resizeMode="contain"
                          />
                          <Text
                            style={[
                              styles.socialText,
                              isApple && { color: '#fff' },
                              isGoogle && { color: '#000' },
                            ]}
                          >
                            {isGoogle
                              ? 'Login with Google'
                              : 'Login with Apple'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            )}
          </Formik>
        </View>
        <AuthFooter
          message="Not a member?"
          linkText="Sign up"
          targetScreen={NavigationStrings.SIGN_UP}
        />
      </ScrollView>

      {loading && <Loader />}
    </Container>
  );
};

export default SignIn;
