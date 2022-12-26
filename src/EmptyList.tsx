import React from "react";
import iconClip from "./assets/clipboard.svg";
import styles from "./EmptyList.module.css";

export function EmptyList() {

  return (
    <div className={styles.empty}>
      <img src={iconClip} />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
  
}