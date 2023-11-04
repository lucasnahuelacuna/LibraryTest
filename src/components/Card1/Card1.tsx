import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Card1Props {
    title: string;
    description: string; 
    confirmButtonText: string; 
    cancelButtonText: string; 
    handleConfirm: () => void; 
    handleCancel: () => void;
}

const Card1 = ({ title, description, confirmButtonText, cancelButtonText, handleConfirm, handleCancel}: Card1Props) => {
  return (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <View style={styles.cardActionsContainer}>
            <Pressable style={{ marginRight: 15 }} onPress={handleCancel}>
                <Text style={styles.buttonText}>{cancelButtonText}</Text>
            </Pressable>
            <Pressable onPress={handleConfirm}>
                <Text style={styles.buttonText}>{confirmButtonText}</Text>
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
        marginBottom: 15
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
        color: '#6002EE',
        fontWeight: '500'
    }
});

export default Card1;