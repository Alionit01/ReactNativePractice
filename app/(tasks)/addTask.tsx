import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';

export default function AddTask({ onAddTask }: { onAddTask: (title: string) => void }) { // will be edited later


  const [title, setTitle] = useState('');

  function handlePress() {
    onAddTask(title);
    setTitle('');
  }

  return (
    <View style={styles.inputRow}>
      <TextInput
       placeholder="Add task" 
       value={title} 
       onChangeText={setTitle} 
       style= {styles.input}
       />
      <Button color={'#6366F1'} title='Add' onPress={handlePress} />
    </View>
  )
}
const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input:{
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
    borderRadius: 4,
    
  }
  })
