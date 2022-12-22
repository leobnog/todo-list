import styles from "./Body.module.css";
import iconPlus from "./assets/plus.svg";
import iconClip from "./assets/clipboard.svg";
import iconTrash from "./assets/trash.svg";

function Tasks() {
  // return <EmptyList />
  return <Task />
}

function EmptyList() {
  return (
    <div className={styles.empty}>
      <img src={iconClip}/>
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <div><span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span></div>
      <div><img src={iconTrash}/></div>
    </div>
  )
}

export function Body() {
  return (
    <>
      <div className={styles.formCreateTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          <span>Criar</span>
          <img src={iconPlus} />
        </button>
      </div>
      <div className={styles.containerTasks}>
        <div className={styles.containerLabels}>
          <div className={styles.divLabel}>
            <span>Tarefas criadas</span>
            <div className={styles.divCounter}><span>0</span></div>
          </div>
          <div className={styles.divLabel}>
            <span>Concluídas</span>
            <div className={styles.divCounter}><span>0</span></div>
          </div>
        </div>
        <Tasks />
      </div>
    </>
  );
}
