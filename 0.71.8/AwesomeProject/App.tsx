import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, Text,
} from 'react-native';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Text>Hey</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
