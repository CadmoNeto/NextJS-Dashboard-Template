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
        <div className={styles.card}>
            <div className={styles.card_header}>
                <p>{nome}</p>
                <p>{ovr}</p>
            </div>
            <div className={styles.card_body}>
                <div className={styles.card_upper}></div>
                <div className={styles.card_lower}>
                    <div className={styles.card_position}>
                        <p>{pos}</p>
                    </div>
                    <div className={styles.card_attributes}>
                        <div className={styles.card_attributes_column}>
                            <p>LEV: {lev}</p>
                            <p>REC: {rec}</p>
                        </div>
                        <div className={styles.card_central_line}></div>
                        <div className={styles.card_attributes_column}>
                            <p>ATQ: {atk}</p>
                            <p>BLQ: {atk}</p>
                        </div>
                    </div>
                    <div className={styles.card_attributes_row}>
                        <p>SAQ: {lev}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}