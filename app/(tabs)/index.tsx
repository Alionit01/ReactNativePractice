import { Button } from 'react-native';
import { router } from 'expo-router';
import { View, Text, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function HomeScreen() {

  const [count, setCount] = useState(() =>0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Home</Text>
      <View style={styles.button}>
        <Button title="Open Modal" color="#6366F1" onPress={() => router.push('/modal')} />
      </View>
      <View style={styles.button}>
        <Button color="#6366F1" title="Increment Count" onPress={incrementCount} />
        <Text style={styles.text}>Count: {count}</Text>
      </View>
      <StatusBar style="light" />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818'
  },
  button:{
    marginTop: 20,
    borderRadius: 5,
    
  },
  text: {
    fontSize: 12,
    color: '#fff',
  },
});
