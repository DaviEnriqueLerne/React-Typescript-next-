export default function Evento() {
    let contador = 0

    function incrementar(){
        console.log(contador++)
    }

    return (
        <button className={`
        flex flex-col items-center justify-center
            h-72 w-72 bg-green-600
        `} onClick={incrementar}>
            Evento
        </button>
    )
}