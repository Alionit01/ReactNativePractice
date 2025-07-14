import React, { useState } from 'react';                   
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import TaskList from '../(tasks)/tasklist';             
import AddTask from '../(tasks)/addTask';

export type TaskType = {          
  id: number;
  title: string;
  completed: boolean;
};

let nextId = 2;

const initialTasks: TaskType[] = [                                     
  { id: 0, title: 'Do something', completed: false },
  { id: 1, title: 'Do nothing',  completed: true  },
];

export default function TaskScreen() {                           
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);         

  function handleAddTask(title: string) {
    setTasks(prev => [                                      
      ...prev,
      { id: nextId++, title, completed: false },
    ]);
  }

  function handleChangeTask(nextTask: TaskType) {
    setTasks(tasks.map(t => t.id === nextTask.id ? nextTask : t));
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter(t => t.id !== taskId));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks List</Text>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181818' },
  title:     { fontSize: 32, fontWeight: 'bold', color: '#6366F1', marginBottom: 20 },
  header:    { backgroundColor: '#181818', padding: 20, alignItems: 'center' },
});
