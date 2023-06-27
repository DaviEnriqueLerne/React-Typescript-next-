interface BotoesProps{
    inc: (valor: number) => void;
    dec: (valor: number) => void;
}

export default function Botoes(props: BotoesProps){
    return(
        <div className=" flex justify-between pt-3 gap-2">
            <button className="botao flex-1"
            onClick={() => props.dec(5)}>
                Dec
            </button>
            <button className="botao flex-1"
            onClick={() => props.inc(10)}>
                Inc
            </button>
        </div>
    )
}