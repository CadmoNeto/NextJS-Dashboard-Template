export default function Card({
    nome,
    pos, //posição
    ovr, //média
    lev, //levantamento
    rec, //recepção
    atk, //ataque
    saq, //saque
    blq //bloqueio
}: {
    nome: string,
    pos: string,
    ovr: number,
    lev: number,
    rec: number,
    atk: number,
    saq: number,
    blq: number
}){
    return(
        <div className="grid col-1 h-64 w-48 rounded-md bg-gray-100">
            <div className="flex h-10 w-48 items-center justify-between rounded-md bg-blue-600 font-bold text-white p-1">
                <p>{nome}</p>
                <p>{ovr}</p>
            </div>
            <div className="grid item-end h-56 border-solid border-4 border-blue-600 rounded-md">
                <div className="grid self-end items-end h-26 w-48">
                    <div className="grid grid-cols-[79px_2px_79px] w-48 items-center justify-between">
                        <p className="flex justify-center">LEV: {lev}</p>
                        <p className="w-0.5">|</p>
                        <p>ATQ: {atk}</p>
                    </div>
                    <div className="grid grid-cols-[79px_2px_79px] w-48 items-center justify-between">
                        <p className="flex justify-center">REC: {rec}</p>
                        <p className="w-0.5">|</p>
                        <p>BLQ: {atk}</p>
                    </div>
                    <div className="grid grid-cols-[79px_2px_79px] w-48 items-center justify-between">
                        <p className="flex justify-center">SAQ: {lev}</p>
                        <p>|</p>
                        <p>{pos}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}