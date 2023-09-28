import { Topico } from ".."
import { TopicoListItem } from "../TopicoListItem"

interface TopicoListProps {
    topicos: Topico[]
}

export function TopicoList({topicos}: TopicoListProps) {
    return(
        <>
            <ul>
                {topicos.map(topico => <TopicoListItem key={topico.id} topico={topico}/>)}
            </ul>
        </>
    )
}