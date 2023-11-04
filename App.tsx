import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, useColorScheme } from 'react-native';
import Card1 from './src/components/Card1';
import Card2 from './src/components/Card2/Card2';
import Card3 from './src/components/Card3';

function App(): JSX.Element {
  const [text, onChangeText] = useState('');

  useEffect(() => {
    console.log(text);
  }, [text]);

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
        <Card2 
          name='Luke Hopkins'
          date='October 25th 2023'
          title='My Title'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.'
          imageURL='https://comerciallosangeles.com/wp-content/uploads/2022/09/Mesa-de-trabajo-2-800x800.jpg'
        />
        <Card3 
          title='My Title'
          placeholder='Introduce some text!'
          confirmButtonText='Confirm'
          cancelButtonText='Cancel'
          handleConfirm={() => console.log('Confirm Button Pressed')}
          handleCancel={() => console.log('Cancel Button Pressed')}
          text={text}
          onChangeText={onChangeText}
        />
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
