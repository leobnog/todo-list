import React from "react";
import { TaskProps } from "./Body";
import { EmptyList } from "./EmptyList";
import { Task } from "./Task";

export function Tasks({
    tasks,
    setTasks,
  }: {
    tasks: TaskProps[];
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  }) {
    if (tasks.length === 0) return <EmptyList />;
  
    return (
      <>
        {tasks.map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
        ))}
      </>
    );
  }