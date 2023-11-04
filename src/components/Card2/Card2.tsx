import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Card2Props {
  name: string; 
  date: string; 
  title: string; 
  description: string; 
  imageURL: string;
} 
const Card2 = ({ name, date, title, description, imageURL }: Card2Props) => {
  
  const getInitials = (name: string) => {
    if(name) {
      const initials = name?.match(/(\b\S)?/g)?.join("")?.match(/(^\S|\S$)?/g)?.join("");
      return initials?.toUpperCase();
    } else {
      return 'XX';
    }
  }

  return (
    <View style={styles.cardContainer}>
        <View style={styles.cardHeaderContaier}>
            <View style={styles.avatar}>
                <Text style={styles.textAvatar}>{getInitials(name)}</Text>
            </View>
            <View style={styles.headerText}>
                <Text>{name}</Text>
                <Text>{date}</Text>
            </View>
        </View>
        <Image
            source={{ uri: imageURL }}
            style={{ width: '100%', height: 200 }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
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