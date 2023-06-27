import useProcessando from "@/data/hooks/useProcessando";
import { useState } from "react";

export default function Personagens() {
    const { finalizarProcessamento, iniciarProcessamento, processando } =
        useProcessando();

    const [personagens, setPersonagens] = useState<any>([]);
    //     async function simularChamadaAPI() {
    //         return new Promise((resolve) => {
    //             setTimeout(() => {
    //                 resolve(true);
    //             }, 3000);
    //         });
    //     }

    async function obterPersonagens() {
        try {
            iniciarProcessamento();
            const resp = await fetch("https://swapi.dev/api/people/");
            const data = await resp.json();
            setPersonagens(data.results);
        } finally {
            finalizarProcessamento();
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <button className="botao" onClick={obterPersonagens}>
                Obter personagens
            </button>
            {processando ? (
                <h1>Carregando...</h1>
            ) : personagens.length > 0 ? (
                <ul>
                    {personagens.map((p: any) => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                </ul>
            ) : (
                <h1>Nenhum personagem encontrado</h1>
            )}
        </div>
    );
}
