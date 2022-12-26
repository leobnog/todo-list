import React, { FormEvent, useState } from "react";
import styles from "./Body.module.css";
import iconPlus from "./assets/plus.svg";
import { Tasks } from "./Tasks";

export interface TaskProps {
  id: number;
  description: string;
  done: boolean;
}

export function Body() {
  const [createdTasks, setCreatedTasks] = useState<number>(0);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [description, setDescription] = useState<string>("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setTasks((state) => [
      ...state,
      { id: createdTasks + 1, description: description, done: false },
    ]);
    setCreatedTasks(createdTasks + 1);
    setDescription("");
  }

  function handleChangeDescription(event: React.FormEvent<HTMLInputElement>) {
    setDescription(event.currentTarget.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.formCreateTask}>
          <input
            type="text"
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChange={handleChangeDescription}
          />
          <button type="submit" disabled={description.trim().length === 0}>
            <span>Criar</span>
            <img src={iconPlus} />
          </button>
        </div>
        <div className={styles.containerTasks}>
          <div className={styles.containerLabels}>
            <div className={styles.divLabel}>
              <span>Tarefas criadas</span>
              <div className={styles.divCounter}>
                <span>{createdTasks}</span>
              </div>
            </div>
            <div className={styles.divLabel}>
              <span>Concluídas</span>
              <div className={styles.divCounter}>
                <span>{`${
                  tasks.filter((rowTask) => rowTask.done === true).length
                }/${tasks.length}`}</span>
              </div>
            </div>
          </div>
          <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
      </form>
    </>
  );
}
