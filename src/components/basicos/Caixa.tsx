export default function Caixa (props: any){
    return (
        <div className={`
            flex items-center justify-center
            bg-purple-500 m-2 rounded-md p-2
            w-64 h-64 text-5xl font-bold 
        `}>
            {props.children}
        </div>
    )
}