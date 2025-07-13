import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818'
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
}); 