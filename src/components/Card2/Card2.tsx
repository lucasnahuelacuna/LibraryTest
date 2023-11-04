import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Card2 = () => {
  return (
    <View style={styles.cardContainer}>
        <View style={styles.cardHeaderContaier}>
            <View style={styles.avatar}>
                <Text style={styles.textAvatar}>LA</Text>
            </View>
            <View style={styles.headerText}>
                <Text>Title</Text>
                <Text>Subtitle</Text>
            </View>
        </View>
        <Image
            source={{ uri: "https://comerciallosangeles.com/wp-content/uploads/2022/09/Mesa-de-trabajo-2-800x800.jpg"}}
            style={{ width: '100%', height: 200 }}
        />
        <Text style={styles.title}>Title</Text>
        <Text>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Donec vel egestas dolor, 
            nec dignissim metus.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
      backgroundColor: '#fff',
      padding: 10,
      width: '80%',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 15
  },
  cardHeaderContaier: {
    flexDirection: 'row',
  },
  avatar: {
    backgroundColor: '#6002EE',
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    
  },
  textAvatar: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  headerText: {
    marginLeft: 15
  },
  cardActionsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
  },
  title: {
      fontSize: 18,
      fontWeight: '600'
  },
  buttonText: {
      color: '#0000ff',
      fontWeight: '500'
  }
});

export default Card2;