import React, { useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src/navigation/Stack/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomStatusBar, CustomToast } from './src/Components';
import { COLORS } from './src/constant';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';


function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <SafeAreaProvider style={[
          styles.container,
          Platform.OS === 'android' && styles.androidSafeArea
        ]}>
          <CustomStatusBar backgroundColor={COLORS.modalColor} />
          <SafeAreaView
            style={[
              styles.container,
              Platform.OS === 'android' && styles.androidSafeArea
            ]}
          >
            <MainNavigator />
            <CustomToast />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>

    </Provider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 15 : 0, // Adjust this value as needed
    paddingBottom: Platform.OS === 'android' ? 10 : 0// Adjust this value as needed
  },
});

export default App;
