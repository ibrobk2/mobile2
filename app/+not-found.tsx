import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


export default function NotFoundScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>OOPS! Page Not Found!</Text>
      <Link style={styles.link} href="/">Go to Home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    text: {
        fontSize: 28, 
        color: 'red',  
        },
    link: { 
        color: 'blue', 
        },
})