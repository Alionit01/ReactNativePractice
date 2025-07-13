import { Image, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
       <Image style={styles.image} source={require('../../assets/images/example.png')} />
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20
  },
  text: {
    fontSize: 24,
    color: '#fff',
   
  }
})