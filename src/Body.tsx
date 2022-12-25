import styles from "./Body.module.css";
import iconPlus from "./assets/plus.svg";
import iconClip from "./assets/clipboard.svg";
import iconTrash from "./assets/trash.svg";
import { FormEvent, useState } from "react";

interface TaskProps {
  id: number;
  description: string;
}

function Tasks({ tasks }: { tasks: TaskProps[] }) {
  if (tasks.length === 0) return <EmptyList />;

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
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
function Task(task: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <div>
        <span>{task.description}</span>
      </div>
      <div>
        <img src={iconTrash} />
      </div>
    </div>
  );
}

export function Body() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [description, setDescription] = useState<string>("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const arrTasks = JSON.parse(JSON.stringify(tasks));
    arrTasks.push({ id: Math.random(), description: description });
    setTasks(arrTasks);
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
                <span>0</span>
              </div>
            </div>
            <div className={styles.divLabel}>
              <span>Concluídas</span>
              <div className={styles.divCounter}>
                <span>0/0</span>
              </div>
            </div>
          </div>
          <Tasks tasks={tasks} />
        </div>
      </form>
    </>
  );
}
