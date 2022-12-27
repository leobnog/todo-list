import iconClip from "../assets/clipboard.svg";
import { Empty } from "./style";

export function EmptyList() {
  return (
    <Empty>
      <img src={iconClip} />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </Empty>
  );
}
