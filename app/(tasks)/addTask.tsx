import { View, Text } from 'react-native'
import React, { useState } from 'react';

export default function AddTask({ onAddTask }: { onAddTask: (title: string) => void }) { // will be edited later


  const [title, setTitle] = useState('');

  function handlePress() {
    onAddTask(title);
    setTitle('');
  }

  return (
    <View>
      <Text>addTodo</Text>
    </View>
  )
}