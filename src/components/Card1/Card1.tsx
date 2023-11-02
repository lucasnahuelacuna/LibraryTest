import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Card1 = () => {
  return (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>Title</Text>
        <Text>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Donec vel egestas dolor, 
            nec dignissim metus.
        </Text>
        <View style={styles.cardActionsContainer}>
            <Pressable style={{ marginRight: 15 }}>
                <Text style={styles.buttonText}>Deny</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.buttonText}>Accept</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
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

export default Card1;