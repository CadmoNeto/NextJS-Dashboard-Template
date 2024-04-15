import Card from "./ui/cards";

export default function Page() {
    return(
        <main>
            <h1>Jogadores</h1>
            <div>
                <Card nome="Cadmo" pos="Ponteiro" ovr={72} lev={62} rec={54} atk={76} saq={72} blq={60} />
            </div>
        </main>
    );
}