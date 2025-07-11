import { Button } from 'react-native';
import { router } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home (inside tabs)</Text>
      <Button title="Open Modal" onPress={() => router.push('/modal')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f35a',
  },
});
