import React, { FormEvent, useState } from "react";
import iconPlus from "../assets/plus.svg";
import { Tasks } from "../Tasks";
import {
  ContainerLabels,
  ContainerTasks,
  DivCounter,
  DivLabel,
  FormCreatedTask,
} from "./style";

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
        <FormCreatedTask>
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
        </FormCreatedTask>
        <ContainerTasks>
          <ContainerLabels>
            <DivLabel>
              <span>Tarefas criadas</span>
              <DivCounter>
                <span>{createdTasks}</span>
              </DivCounter>
            </DivLabel>
            <DivLabel>
              <span>Concluídas</span>
              <DivCounter>
                <span>{`${
                  tasks.filter((rowTask) => rowTask.done === true).length
                }/${tasks.length}`}</span>
              </DivCounter>
            </DivLabel>
          </ContainerLabels>
          <Tasks tasks={tasks} setTasks={setTasks} />
        </ContainerTasks>
      </form>
    </>
  );
}
