import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0);

  function alterarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1);
    } else {
      setAtivo(indice);
    }
  }

  return (
    <div className="flex flex-col gap-5 w-[90%] md:w-screen">
      <Pergunta
        aberta={ativo === 0}
        indice={0}
        alterarVisibilidade={alterarVisibilidade}
        texto="Quem descobriu o Brasil?"
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Pergunta
        indice={1}
        aberta={ativo === 1}
        alterarVisibilidade={alterarVisibilidade}
        texto="O que é o Typescript?"
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Pergunta
        indice={2}
        aberta={ativo === 2}
        alterarVisibilidade={alterarVisibilidade}
        texto="O que é o React?"
        resposta="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}
