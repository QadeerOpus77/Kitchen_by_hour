import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src/navigation/Stack/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomStatusBar, CustomToast } from './src/Components';
import { COLORS } from './src/constant';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={COLORS.modalColor} />
        {/* <SafeAreaView style={styles.container}> */}
        <MainNavigator />
        <CustomToast />
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
