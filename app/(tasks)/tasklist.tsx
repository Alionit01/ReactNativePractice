import { View } from 'react-native';
import React from 'react';
import TaskItem from './taskItem';
import { TaskType } from '../(tabs)/taskScreen';  // ✅ Reuse shared type

type TaskListProps = {
  tasks: TaskType[];
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (id: number) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <View>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onChange={onChangeTask}
          onDelete={onDeleteTask}
        />
      ))}
    </View>
  );
}
