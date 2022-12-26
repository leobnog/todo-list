import React from "react";
import iconTrash from "./assets/trash.svg";
import { TaskProps } from "./Body";
import styles from "./Task.module.css";

export function Task({
  task,
  tasks,
  setTasks,
}: {
  task: TaskProps;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}) {
  function handleCheck(event: React.MouseEvent<HTMLInputElement>) {
    const newArrTasks = tasks.map((rowTask) => {
      if (rowTask.id === parseInt(event.currentTarget.value))
        rowTask.done = !rowTask.done;
      return rowTask;
    });
    setTasks(newArrTasks);
  }

  function handleDelete(id: number) {
    const newArrTasks = tasks.filter((rowTask) => rowTask.id !== id);
    setTasks(newArrTasks);
  }

  return (
    <div className={styles.task}>
      <input value={task.id} type="checkbox" onClick={handleCheck} />
      <div>
        <span className={task.done ? styles.done : ""}>{task.description}</span>
      </div>
      <div>
        <img
          className={styles.trashIcon}
          src={iconTrash}
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
}