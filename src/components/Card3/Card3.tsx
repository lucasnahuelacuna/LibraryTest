import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Card3 = ({ title, placeholder, confirmButtonText, cancelButtonText, handleConfirm, handleCancel, text, onChangeText }: any) => {
  return (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput 
            placeholder={placeholder}
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
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
      fontWeight: '600',
      marginBottom: 10
  },
  buttonText: {
      color: '#6002EE',
      fontWeight: '500'
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  }
});

export default Card3;