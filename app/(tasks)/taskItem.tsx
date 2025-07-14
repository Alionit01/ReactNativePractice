import React from 'react';
import { View, Text, Button } from 'react-native';

type TaskType = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskProps = {
  task: TaskType;
  onChange: (task: TaskType) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({ task, onChange, onDelete }: TaskProps) {
  return (
    <View>
      <Text>{task.title}</Text>
      <Button title="Delete" onPress={() => onDelete(task.id)} />
      {/* Add logic for editing/updating if needed */}
    </View>
  );
}
