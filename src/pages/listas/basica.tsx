import TabelaSerieA from "@/components/listas/TabelaSerieA";
import { IconBallFootball } from "@tabler/icons-react";

export default function PaginaListaBasica() {
        const times = [
                "Botafogo",
                "Palmeiras",
                "Grêmio",
                "Flamengo",
                "Atlético-MG",
                "São Paulo",
                "Fluminense",
                "Internacional",
                "Bragantino",
                "Fortaleza",
        ];

        return (
                <div
                        className={`
                  flex flex-col justify-center items-center h-screen
                `}>
                        <h1 className=" flex items-center gap-2 text-5xl font-black">
                                Tabela Serie A
                                <IconBallFootball
                                        size={50}
                                        stroke={1}
                                        className="text-green-500"
                                />
                        </h1>
                        <TabelaSerieA times={times} />
                </div>
        );
}
