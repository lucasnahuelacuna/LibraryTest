import React from 'react';
import { SafeAreaView, StyleSheet, View, useColorScheme } from 'react-native';
import Card1 from './src/components/Card1';
import Card2 from './src/components/Card2/Card2';
import Card3 from './src/components/Card3';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card1 
          title='My Title'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.'
          confirmButtonText='Confirm'
          cancelButtonText='Cancel'
          handleConfirm={() => console.log('Confirm Button Pressed')}
          handleCancel={() => console.log('Cancel Button Pressed')}
        />
        <Card2 />
        <Card3 />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 15
  }
});

export default App;
