import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, Text,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle="dark-content" backgroundColor={backgroundStyle.backgroundColor} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Text>Hey</Text>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
