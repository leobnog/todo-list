import styles from "./Body.module.css";
import iconPlus from "./assets/plus.svg";
import iconClip from "./assets/clipboard.svg";
import iconTrash from "./assets/trash.svg";
import React, { FormEvent, useState } from "react";

interface TaskProps {
  id: number;
  description: string;
  done: boolean;
}

function Tasks({
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

function EmptyList() {
  return (
    <div className={styles.empty}>
      <img src={iconClip} />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}

function Task({
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
