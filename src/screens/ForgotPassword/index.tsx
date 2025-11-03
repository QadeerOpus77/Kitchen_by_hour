import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import styles from './style';
import { BackHeader, FormInput } from '../../Components';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { Formik } from 'formik';
import { SIZES } from '../../constant';
import * as Yup from 'yup';

const ForgotPassword = () => {
  const width = SIZES.width * 1;

  const OTP = () => {
    navigate({ name: NavigationStrings.OTP as keyof RootStackParamList });
  };
  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
      <BackHeader/>
          <View style={styles.content}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>
              In order to reset your password you need to enter your registered
              email address.
            </Text>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Please enter a valid email')
                  .required('Email is required'),
              })}
              onSubmit={values => {
                console.log('Submitted values:', values);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
                handleSubmit,
              }) => (
                <View style={styles.inputContainer}>
                  <FormInput
                    style={styles.textInput}
                    label="Email Address"
                    placeholder=""
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                    width={width}
                    height={SIZES.padding * 3}
                  />

                 
                </View>
              )}
            </Formik>
             <TouchableOpacity
                         style={[
                           styles.forgotButton,
                         ]}
                         onPress={OTP}
                       >
                         <Text style={styles.forgotButtonText}>Continue</Text>
                         
                       </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
