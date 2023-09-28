import { format } from "date-fns";
import { Topico } from ".."
import { useState } from "react";

interface TopicoListItemProps {
    topico: Topico
}

export function TopicoListItem({topico}: TopicoListItemProps) {

    const dataAtual: Date = topico.created_at;
    const dataFormatada: string = format(dataAtual, 'dd/MM/yyyy HH:mm');

    const [upvotes, setUpvotes] = useState<number>(0)

    const upvote = ()=> {
        setUpvotes(upvotes + 1)
    }

    const downvote = ()=> {
        setUpvotes(upvotes - 1)
    }
    return(
        <>
            <p>{topico.descricao}</p>
            <p>Por: {topico.autor}</p>
            <p>Publicado em: {dataFormatada}</p>
            <p>Upvotes: {upvotes}</p>
            <button onClick={upvote}>Upvote</button> <button onClick={downvote}>Downvote</button>
        </>
    )
}