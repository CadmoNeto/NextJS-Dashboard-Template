import styles from './jogadores.module.css'

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
        // <div className="grid col-1 h-64 w-48 rounded-md bg-gray-100">
        <div className={styles.card}>
            <div className={styles.card_header}>
                <p>{nome}</p>
                <p>{ovr}</p>
            </div>
            <div className={styles.card_body}>
                <div className={styles.card_attributes}>
                <div className={styles.card_attributes_row}>
                        <p className="flex justify-center">LEV: {lev}</p>
                        <p className="w-0.5">|</p>
                        <p>ATQ: {atk}</p>
                    </div>
                    <div className={styles.card_attributes_row}>
                        <p className="flex justify-center">REC: {rec}</p>
                        <p className="w-0.5">|</p>
                        <p>BLQ: {atk}</p>
                    </div>
                    <div className={styles.card_attributes_row}>
                        <p className="flex justify-center">SAQ: {lev}</p>
                        <p>|</p>
                        <p>{pos}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}