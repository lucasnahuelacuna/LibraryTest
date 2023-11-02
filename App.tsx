import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import Card1 from './src/components/Card1';
import Card2 from './src/components/Card2.tsx/Card2';
import Card3 from './src/components/Card3';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Card1 />
      <Card2 />
      <Card3 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
