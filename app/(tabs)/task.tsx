import React, { useState } from 'react';                   
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import TaskList from '../(tasks)/tasklist';              
import AddTask from '../(tasks)/addTask';

let nextId = 2;
const initialTasks = [                                     
  { id: 0, title: 'Do something', completed: false },
  { id: 1, title: 'Do nothing',  completed: true  },
];

export default function Index() {                           
  const [tasks, setTasks] = useState(initialTasks);         

  function handleAddTask(title: string) {
    setTasks(prev => [                                      
      ...prev,
      { id: nextId++, title, completed: false },
    ]);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks List</Text>
        <AddTask onAddTask={handleAddTask} />
      </View>

                                   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181818' },
  title:     { fontSize: 32, fontWeight: 'bold', color: '#6366F1', marginBottom: 20 },
  header:    { backgroundColor: '#181818', padding: 20, alignItems: 'center' },
});
