import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground>
        <Text>explore</Text>
      </ImageBackground>
    </View>
  );
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center"
  }
})