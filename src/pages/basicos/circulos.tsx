import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return(
        <div className="flex justify-around items-center h-screen">
            <Circulo texto="#1"/>
            <Circulo texto="#2" quasePerfeito/>
            <Circulo texto="#3"/>
        </div>
    )
}