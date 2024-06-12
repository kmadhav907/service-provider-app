import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Navigators from './components/Navigators/Navigators';

const App = () => {

  return (
    <KeyboardAvoidingView
      style={styles.backgroundStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.container}>
        <Navigators />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
const styles: any = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    height: '100%',
    width: '100%',
  },
});
export default App;
