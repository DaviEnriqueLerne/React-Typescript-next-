import { useState } from "react";
import If from "./if";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import IfElse from "./IfElse";

interface PerguntaProps {
  indice: number;
  texto: string;
  resposta: string;
  aberta: boolean;
  alterarVisibilidade: (indice: number) => void;
}

export default function Pergunta(props: PerguntaProps) {
  // const [aberta, setAberta] = useState<boolean>(false)

  return (
    <div
      className={`
                border border-zinc-600 rounded-md overflow-hidden
            `}>
      <div
        className=" flex bg-zinc-700 p-5 cursor-pointer justify-between select-none"
        onClick={() => props.alterarVisibilidade(props.indice)}>
        <span>{props.texto}</span>
        <IfElse teste={props.aberta}>
          <IconChevronUp />
          <IconChevronDown />
        </IfElse>
      </div>
      <If teste={props.aberta}>
        <div className="p-5">{props.resposta}</div>
      </If>
    </div>
  );
}
