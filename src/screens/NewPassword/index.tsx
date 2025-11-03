import React, { useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import {
  Button,
  FormInput,
  Container,
  showToast,
  Loader,
  BackHeader
} from '../../Components';
import { SIZES } from '../../constant';
import { Formik } from 'formik';
import styles from './style';
import { useRoute } from '@react-navigation/native';
import { useAuthDispatch, useAuthState } from '../../redux/Hook/authHooks';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const NewPassword: React.FC = () => {
  const route = useRoute();
  const { resetPassword, clearAuthError } = useAuthDispatch();
  const { resetPasswordSuccess, loading, error } = useAuthState();
  const { token } = (route?.params as { token: string }) || {};

  const width = SIZES.width * 1;
  const height = SIZES.height * 0.06;

  const handleNewpassword = () => {
    navigate({
      name: NavigationStrings.SIGN_IN as keyof RootStackParamList,
    })
    showToast({
      type: 'success',
      text1: 'Password reset Successful',
      text2: 'You have successfully Changed the password !',
    });
  };

  //   const handleSubmit = async (values: { newPassword: string; confirmPassword: string }) => {
  //     try {
  //       clearAuthError();
  //       await resetPassword({
  //         token: token,
  //         password: values.newPassword,
  //         confirm_password: values.confirmPassword,
  //       });
  //     } catch (err) {
  //       console.log('Validation error:', err);
  //     }
  //   };

  useEffect(() => {
    if (resetPasswordSuccess && !loading && !error) {
      showToast({
        type: 'success',
        text1: 'Password Reset Successful',
        text2: 'Your password has been updated successfully',
      });
      navigate({
        name: NavigationStrings.AUTH_STACK as keyof RootStackParamList,
      });
    } else if (error) {
      showToast({
        type: 'error',
        text1: 'Password Reset Failed',
        text2: error || 'Failed to reset password. Please try again.',
      });
      clearAuthError();
    }
  }, [resetPasswordSuccess, loading, error]);

  return (

    <Container scroll={true} style={styles.container}>

      <BackHeader />
      <Text style={styles.title}>Set New Password</Text>
      <Text style={styles.instructionText}>
        Please enter your new password
      </Text>

      <Formik
        initialValues={{ newPassword: '', confirmPassword: '' }}
        onSubmit={() => console.log('OTP:')}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={styles.content}>
              <FormInput
                label="New Password"
                placeholder=""
                value={values.newPassword}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                isPassword={true}
                width={width}

                height={SIZES.input * 1.5}
              />

              <FormInput
                label="Confirm Password"
                placeholder=""
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                isPassword={true}
                width={width}
                height={SIZES.input * 1.5}
              />
            </View>

            {/* Button that adjusts with keyboard */}
            <View style={styles.buttonContainer}>
              <Button onPress={handleNewpassword} title="Continue" />
            </View>
          </>
        )}
      </Formik>
      {loading && <Loader />}

    </Container >

  );
};

export default NewPassword;
