import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'

import icedCoffee from "@/assets/images/iced-coffee.png"

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffee}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Premiers apprentissages</Text>
      </ImageBackground>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: "cover",
    justifyContent:"center"
  },
  text: {
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor:'rgba(0,0,0,0.5)'
    }
})